import { useState, useEffect } from "react";
import { fetchEmojis } from "../api/emojiService";
import PropTypes from "prop-types";

const EmojiDisplay = ({ search }) => {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedEmoji, setCopiedEmoji] = useState(null);

  useEffect(() => {
    const loadEmojis = async () => {
      setLoading(true);
      const emojiData = await fetchEmojis(search);
      setEmojis(emojiData);
      setLoading(false);
    };

    loadEmojis();
  }, [search]);

  const handleCopy = (emoji) => {
    navigator.clipboard.writeText(emoji.character);
    setCopiedEmoji(emoji.character);
    setTimeout(() => setCopiedEmoji(null), 1500); 
  };

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="container mx-auto p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
      {emojis.length === 0 ? (
        <p className="text-gray-500 col-span-full">No emojis found</p>
      ) : (
        emojis.map((emoji) => (
          <div
            key={emoji.slug}
            className="relative group bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-blue-100 transition"
            onClick={() => handleCopy(emoji)}
          >
            <span className="text-4xl">{emoji.character}</span>
            <p className="mt-2 font-semibold">{emoji.unicodeName}</p>

            {copiedEmoji === emoji.character && (
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-100 transition-opacity duration-300">
                Copied!
              </span>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default EmojiDisplay;

EmojiDisplay.propTypes = {
  search: PropTypes.string.isRequired,
};