import { useEffect, useState } from "react";

export default function useDebounce(value, duration = 500) {
    const [debouncedValue, setDebouncedValue] = useState();
    useEffect(() => {
      const id = setTimeout(() => {
        setDebouncedValue(value);
      }, duration);

      return () => clearTimeout(id);
    })
  return debouncedValue;
}
