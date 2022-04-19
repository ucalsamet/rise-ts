import { createContext } from "react";
import { IJob, JobState } from "../Interfaces";
export type JobContextProps = {
    jobState: JobState;
    deleteJob: (id: string) => void;
    addJob: (job: IJob) => void;
    editJob: (id: string, priority: number) => void;
}
export const JobContext = createContext<JobContextProps>({} as JobContextProps)