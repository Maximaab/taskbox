import React from 'react';
import IconsSprite from'./../Icons/allIcons/iconSpride.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    className?: string
}

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg className={props.className} width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0"}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${IconsSprite}#${props.iconId}` }/>
        </svg>
    );
};

