import { FC } from "react";
import { Tag } from "../Tag";
import { ITask } from "@/app/types/types";

type CardProps = Pick<ITask, "tags" | "task">;

export const Card: FC<CardProps> = ({ task, tags }) => {
    return (
        <div className="flex flex-col gap-4 w-full p-3 rounded-2xl bg-gray-700 bg-opacity-90">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">{task}</p>
            <div className="flex gap-1 overflow-y-scroll">
                {tags.map((tag) => {
                    return <Tag key={tag.id} tag={tag.tag} />;
                })}
            </div>
        </div>
    );
};
