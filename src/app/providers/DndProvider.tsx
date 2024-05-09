"use client";
import { FC, ReactNode } from "react";
import { DndProvider as DnDProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface IDndProvider {
    children: ReactNode;
}

export const DndProvider: FC<IDndProvider> = ({ children }) => {
    return <DnDProvider backend={HTML5Backend}>{children}</DnDProvider>;
};
