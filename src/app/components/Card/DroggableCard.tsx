"use client"
import { FC, useRef } from "react";
import { useDrag } from "react-dnd";
import { Card } from "./Card";
import { ITask } from "@/app/types/types";

interface IDraggableCard {
    card: ITask;
}

export const DraggableCard: FC<IDraggableCard> = ({ card }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "CARD",
        item: { card },
        collect: (monitor) => {
            return {
                isDragging: !!monitor.isDragging(),
            };
        },
    }));
    drag(ref);

    return (
        <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="w-full">
            <Card task={card.task} tags={card.tags} />
        </div>
    );
};
