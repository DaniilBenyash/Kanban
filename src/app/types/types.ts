export interface IKanbanData {
    category: string;
    id: number;
    tasks: ITask[];
}

export interface ITask {
    task: string;
    tags: ITag[];
    id: number;
}

interface ITag {
    tag: string;
    id: number
}
