import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    const escapeKeyHandler = (e) => {
      if (e.key === "Escape") callback();
    };
    window.addEventListener("keydown", escapeKeyHandler);
    return () => window.removeEventListener("keydown", escapeKeyHandler);
  }, [callback]);
}
