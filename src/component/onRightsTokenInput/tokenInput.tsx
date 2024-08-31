import React, { useId, useState } from "react";

import s from "./tokenInput.module.scss";
import clsx from "clsx";

export type SuperInputTextPropsType = {
  label?: string;
  id?: string;
  type?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  classNameInput?: string;
  showBorder?: boolean;
  err?: boolean;
};

export const TokenInput = (props: SuperInputTextPropsType) => {
  const { label, id, type, error, disabled, value, classNameInput, showBorder, err  } = props;
  const finalId = useLabelId(id);

  const classes = {
    input: clsx(s.input, error && s.error, classNameInput),
    
  };

  return (
    <div className={s.PageWrapper}>
      <div className={s.emailWrapper}>
        {label && <label htmlFor={finalId}>{label}</label>}
      </div>
      <div className={clsx(s.inputWrapper, { [s.border]: showBorder, [s.inputError]: (error && err) })}>
        <input
          className={classes.input}
          id={finalId}
          type={type}
          value={value}
          disabled={disabled}
          placeholder={error ? "Error" : "Input"}
        />
      </div>
    </div>
  );
};

export function useLabelId(id?: string) {
  const generatedId = useId();

  if (!id) {
    return generatedId;
  }

  return id;
}
