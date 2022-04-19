import { useContext } from "react"
import {JobContext} from "../context/JobContext"
export const useJobs = () => {
    const {jobState ,addJob ,deleteJob, editJob} = useContext(JobContext);

    return {
        jobs: jobState.jobs.sort(function (a, b) { return a.priority - b.priority}), 
        addJob,
        deleteJob,
        editJob,
    }
}