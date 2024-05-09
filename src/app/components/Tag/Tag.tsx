import { FC } from "react";

interface ITag {
    tag: string;
}

export const Tag: FC<ITag> = ({ tag }) => {
    return (
        <div className="w-min p-1 px-3 rounded-2xl bg-gray-500 bg-opacity-80">
            <p className="text-xs">{tag}</p>
        </div>
    );
};
