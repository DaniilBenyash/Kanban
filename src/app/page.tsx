"use client";
import { DndProvider } from "./providers";
import { DraggableCard, DroppableColumn } from "./components";
import { useGetKanbanData } from "@/hooks/useGetKanbanData";

export default function Home() {
    const { data: kanbanData, isLoading, error } = useGetKanbanData();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <main className="flex-1 p-10 flex gap-5 w-max overflow-y-clip scrollbar-thin">
            <DndProvider>
                {kanbanData?.map((category) => {
                    return (
                        <DroppableColumn
                            key={category.id}
                            name={category.category}
                            onDrop={(card) => console.log(card)}
                        >
                            {category.tasks.map((task) => {
                                return <DraggableCard key={task.id} card={task} />;
                            })}
                        </DroppableColumn>
                    );
                })}
            </DndProvider>
        </main>
    );
}
