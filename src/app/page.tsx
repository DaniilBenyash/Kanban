"use client";
import { DndProvider } from "./providers";
import { DraggableCard, DroppableColumn } from "./components";
import { useFetch } from "@/hooks/useFetch";
import { kanbanUrl } from "@/constants/urls";

export default function Home() {
    const { data: kanbanData, isLoading, error } = useFetch(kanbanUrl);

    if (isLoading) return null;
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
