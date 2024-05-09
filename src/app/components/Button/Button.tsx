import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "remove";
}

export const Button: FC<IButton> = ({ variant, ...props }) => {
    const cn = classNames({
        "w-full p-1 rounded-xl bg-gray-700 bg-opacity-90": variant === "primary",
        "p-2 rounded-xl bg-gray-500 bg-opacity-40": variant === "remove"
    });
    return <button {...props} className={cn}></button>;
};
