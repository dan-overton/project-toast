import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        className={styles.controlsWrapper}
        onSubmit={(evt) => {
          evt.preventDefault();

          addToast(message, variant);
          setMessage("");

          setVariant(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(evt) => {
                setMessage(evt.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label htmlFor={`variant-${variantOption}`} key={variantOption}>
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="variant"
                  checked={variant === variantOption}
                  value={variantOption}
                  onChange={(evt) => {
                    setVariant(evt.target.value);
                  }}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
