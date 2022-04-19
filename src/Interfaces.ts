export interface TableProps {
    priority: number;
}

export interface IJob {
        id: string;
        name: string;
        priority: number;
}

export interface IJobs {
    deleteModal: boolean;
    editModal: boolean;
}

export interface ISearch {
    search: {
        searchText: string,
        priority: number
    }
}

export interface JobState {
    jobs: IJob[],
}