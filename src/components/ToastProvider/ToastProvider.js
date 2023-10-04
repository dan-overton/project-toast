import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    setToasts((toasts) => [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  }, []);

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
      clearToasts,
    }),
    [toasts, addToast, removeToast, clearToasts]
  );

  useEscapeKey(clearToasts);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
