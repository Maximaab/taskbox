import React, { useId } from "react";
import { Icon } from "../Icons/Icon";
import s from "./input.module.scss";
import clsx from "clsx";
import { Typography } from "../../typography/typography";
import { DropDownTooltip } from "./dropDown/dropDown";

export type SuperInputTextPropsType = {
  label?: string;
  id?: string;
  type?: string;
  err?: boolean;
  value?: string;
  disabled?: boolean;
  info?: boolean;
  showBorder?: boolean;
  helper?: boolean;
  variant?: "email" | "normal";
  error?: string;
  texthelper?: string;
  after?: boolean;
  before?: boolean;
  classNameInput?: string;
  dark?: boolean;
};

export const TextField = (props: SuperInputTextPropsType) => {
  const {
    label,
    id,
    type,
    err,
    disabled,
    value,
    info,
    showBorder,
    helper,
    error,
    texthelper,
    after,
    before,
    classNameInput,
    dark,
  } = props;
  const finalId = useLabelId(id);
  const classes = {
    input: clsx(s.input, error && s.error, classNameInput),
    icon: clsx(error && s.errorIcon, classNameInput),
  };

  return (
    <div className={s.Contaner}>
      <div className={s.emailWrapper}>
        {label && (
          <Typography
            className={clsx(s.label, { [s.darkTmeme]: dark })}
            variant="regular16"
            as="label"
            htmlFor={finalId}
          >
            {label}
          </Typography>
        )}
        {info && (
          <div className={s.infoIconWrapper}>
            <DropDownTooltip />
          </div>
        )}
      </div>
      <div
        className={clsx(s.inputWrapper, {
          [s.border]: showBorder,
          [s.inputError]: error && err,
          [s.darkTmeme]: dark,
        })}
      >
        {error && err ? (
          <Icon
            className={classes.icon}
            height="16"
            width="16"
            iconId="redSearch"
          ></Icon>
        ) : (
          <Icon
            className={classes.icon}
            height="16"
            width="16"
            iconId="search"
          ></Icon>
        )}
        <input
          className={clsx(classes.input, { [s.darkTmeme]: dark })}
          id={finalId}
          type={type}
          value={value}
          disabled={disabled}
          placeholder={err ? "Error" : "Input"}
        />
        {error && err ? (
          <Icon
            className={classes.icon}
            height="16"
            width="16"
            iconId="afterRed"
          ></Icon>
        ) : (
          after && (
            <Icon
              className={classes.icon}
              height="16"
              width="16"
              iconId="iconAfter"
            ></Icon>
          )
        )}
        {before && <Icon height="20" width="32" iconId="iconBefore"></Icon>}
      </div>
      {helper && (
        <Typography
          variant="regular14"
          as="span"
          id={`${id}-helper`}
          className={clsx(s.ThemeHelper, { [s.darkThemeHelper]: dark })}
        >
          {texthelper}
        </Typography>
      )}
      {err && (
        <Typography
          variant="regular14"
          as="span"
          id={`${id}-error`}
          style={{ color: "red" }}
        >
          {error}
        </Typography>
      )}
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
