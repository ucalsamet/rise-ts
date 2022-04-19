import { JobState,IJob } from '../Interfaces'

type JobAction = | {type: 'ADD_JOB',payload:IJob}
                 | {type:'DELETE_JOB',payload:{id:string}}
                 | {type: 'EDIT_JOB',payload: {id:string,priority:number}}

export const jobReducer = (state:JobState,action:JobAction) => {
    console.log(action);
    
    switch (action.type) {
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [...state.jobs,action.payload]
            }
        case 'DELETE_JOB':
            return {
                ...state,
                jobs: state.jobs.filter( job => (job.id !== action.payload.id))
            }
        case 'EDIT_JOB':
            return {
                    ...state,
                    jobs: state.jobs.map((job) => job.id === action.payload.id ? 
                        {...job,priority: action.payload.priority} 
                        : job)
                         }
        default:
            return state;
    }
}