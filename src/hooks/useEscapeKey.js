import React from "react";

function useEscapeKey(onEscape) {
  React.useEffect(() => {
    function dismissToastsOnEscape(event) {
      if (event.code === "Escape") {
        onEscape();
      }
    }

    window.addEventListener("keydown", dismissToastsOnEscape);

    return () => {
      window.removeEventListener("keydown", dismissToastsOnEscape);
    };
  }, [onEscape]);
}

export default useEscapeKey;
