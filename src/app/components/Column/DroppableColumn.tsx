"use client";
import { FC, ReactNode, useRef } from "react";
import { Column } from "./Column";
import { useDrop } from "react-dnd";

interface IDroppableColumn {
    onDrop: (item: ReactNode) => void;
    children: ReactNode;
    name: string;
}

export const DroppableColumn: FC<IDroppableColumn> = ({ children, onDrop, name }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isOver }, drop] = useDrop({
        accept: "CARD",
        drop: (item: any) => onDrop(item.card),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    drop(ref);

    return (
        <div
            ref={ref}
            style={{ background: isOver ? "#5d96f1e6" : "inherit" }}
            className=" rounded-2xl"
        >
            <Column name={name}>{children}</Column>
        </div>
    );
};
