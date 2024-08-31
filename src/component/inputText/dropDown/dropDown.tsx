import { useState } from "react";
import { Typography } from "../../../typography/typography";
import { Icon } from "../../Icons/Icon";
import s from "./dropDown.module.scss";

type Props = {};

export const DropDownTooltip = (Props: Props) => {
  const {} = Props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <Typography
      as="div"
      variant="regular14"
      className={s.container}
      onClick={toggleTooltip}
    >
        <div className={s.leftWidth}></div>
        <div className={s.ToltipWrapper}>
      <Typography
        as="span"
        variant="small"
        className={`${s.text} ${isVisible ? s.visible : ""}`}
      >
        This is a tooltip
      </Typography>
      <div className={s.IconWrapper}>
        <Icon height="12" width="12" iconId={"iconInfo"}></Icon>
      </div>
      </div>
    </Typography>
  );
};
