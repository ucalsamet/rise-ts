import React, { useReducer } from 'react'
import { IJob, JobState } from '../Interfaces'
import { JobContext } from './JobContext'
import { jobReducer } from './JobReducer'
import Data from "../api/data.json"

const initialState: JobState = {
    jobs: Data
}

interface props {
    children: JSX.Element | JSX.Element[]
}

const JobProvider = ({ children }: props) => {
    const [jobState, dispatch] = useReducer(jobReducer, initialState)

    const addJob = (job: IJob): void => {
        dispatch({ type: "ADD_JOB", payload: { id: job.id, name: job.name, priority: job.priority } })
    }

    const deleteJob = (id: string): void => {
        dispatch({ type: 'DELETE_JOB', payload: { id } })
    }

    const editJob = (id: string, priority: number): void => {
        dispatch({ type: 'EDIT_JOB', payload: { id, priority } })
    }

    return (
        <JobContext.Provider value={{ jobState, deleteJob, addJob, editJob }}>
            {children}
        </JobContext.Provider>
    )
}

export default JobProvider