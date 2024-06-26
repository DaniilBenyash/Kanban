"use client";
import { IKanbanData } from "@/app/types/types";
import { useEffect, useState } from "react";

export const useGetKanbanData = () => {
    const [data, setData] = useState<IKanbanData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => {
                if (!res.ok) {
                    throw Error("Error fetching data");
                }
                return res.json();
            })
            .then((data) => {
                setData(data.data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err: any) => {
                setIsLoading(false);
                setError(err.message);
            });
    }, []);

    return { data, isLoading, error };
};
