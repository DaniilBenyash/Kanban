import { FC, ReactNode } from "react";
import { Button } from "../Button/Button";
interface IColumn {
    name: string;
    children: ReactNode;
}

export const Column: FC<IColumn> = ({ name, children }) => {
    return (
        <div className="flex flex-col h-full gap-2">
            <div className="flex flex-col items-center gap-3 w-64 p-4 rounded-2xl bg-gray-500 bg-opacity-40 overflow-y-scroll rounded-2xl">
                <input
                    type="text"
                    defaultValue={name}
                    className={`bg-opacity-0 bg-gray-500`}
                    size={name.length - 2}
                />
                <Button variant="primary">+</Button>
                <div className="flex flex-col items-center w-full gap-3">{children}</div>
            </div>
            <Button variant="remove">x</Button>
        </div>
    );
};
