import { useEffect, useState } from "react";
import { EmojiContext } from "./EmojiContext";
import { fetchEmojis } from "../api/emojiService";
import propTypes from "prop-types";
import useDebounce from "../hook/useDebounce";

export default function EmojiProvider({ children }) {
	const [emojis, setEmojis] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filteredEmojis, setFilteredEmojis] = useState([]);
	const [query, setQuery] = useState("");

	const debouncedQuery = useDebounce(query);
	function filterEmojis(emojis) {
		return emojis.filter((emoji) =>
			emoji.unicodeName.includes(debouncedQuery)
		);
	}

	const loadEmojis = async () => {
		setLoading(true);
		const emojiData = await fetchEmojis();
		setEmojis(emojiData);
		setLoading(false);
	};
	useEffect(() => {
		if (!emojis.length) {
			loadEmojis();
		}
		if (debouncedQuery) {
			const data = filterEmojis(emojis);
			setFilteredEmojis(data);
		} else {
			setFilteredEmojis(emojis);
		}
	}, [debouncedQuery, emojis]);

	return (
		<EmojiContext.Provider
			value={{
				emojis,
				filteredEmojis,
				setFilteredEmojis,
				loading,
				query,
				setQuery,
			}}
		>
			{children}
		</EmojiContext.Provider>
	);
}

EmojiProvider.propTypes = {
	children: propTypes.node,
};
