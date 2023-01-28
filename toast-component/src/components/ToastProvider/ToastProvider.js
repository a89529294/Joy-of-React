import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  const addToast = (msg, variant) => {
    setToasts((previousToasts) => [...previousToasts, { variant, msg, id: crypto.randomUUID() }]);
  };

  const dismissToast = (toastId) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== toastId));
  };
  return <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
