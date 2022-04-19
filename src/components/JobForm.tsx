import React, { useState } from 'react'
import styled from "styled-components"
import { Grid, Button, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { IJob } from "../Interfaces"
import { useJobs } from '../hooks/useJobs'
import { v4 as uuidv4 } from 'uuid';

function JobForm() {
  const { addJob } = useJobs()
  const [job, setJob] = useState<IJob>({
    id: uuidv4(),
    name: "",
    priority: 0,
  })

  const hadleChange = (event: SelectChangeEvent<unknown | HTMLInputElement>) => {
    setJob({
      ...job,
      [event.target.name]: event.target.value
    })
  }

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if (job.name !== "" && job.priority !== 0) {
      addJob(job);
      setJob({ id: uuidv4(), name: "", priority: 0 })
    }
  }
  return (
    <Wrapper
      spacing={2}
      container
      item
      direction="column"
      justifyContent="space-between"
      alignItems="start"
    >
      <WrapperTitle item xs={12} sm={12} md={12}>
        <JobText>Create New Job</JobText>
      </WrapperTitle>
      <WrapperJob
        container
        item
        direction="row"
        alignItems="center">

        <JobContent item xs={12} sm={12} md={6}>
          <JobContainer>
            <InputJob placeholder='Job Name...' value={job.name} name="name" onChange={hadleChange} />
          </JobContainer>
        </JobContent>
        <PriorityContent item xs={12} sm={12} md={4}>
          <SelectPriority value={job.priority} name="priority" onChange={hadleChange}>
            <MenuItem value={0} disabled>
              Choose
            </MenuItem>
            <MenuItem value={1}>Urgent</MenuItem>
            <MenuItem value={2}>Regular</MenuItem>
            <MenuItem value={3}>Trival</MenuItem>
          </SelectPriority>
        </PriorityContent >
        <ButtonContent item xs={12} sm={12} md={2}>
          <AddButton onClick={handleAdd} variant='contained'>Add Job</AddButton>
        </ButtonContent>
      </WrapperJob>

    </Wrapper>
  )
}

export default JobForm


const Wrapper = styled(Grid)`
    padding: 5px 50px;
    width: 98vw !important;
    margin-top:0  !important;
    margin-left: 0 !important;
`
const WrapperTitle = styled(Grid)`
      padding: 10px;

`
const WrapperJob = styled(Grid)`
    padding: 14px 0 !important;

`
const JobContent = styled(Grid)`
    padding: 5px;
`
const PriorityContent = styled(Grid)`
    padding: 5px;
`
const ButtonContent = styled(Grid)`
    padding: 5px;
`
const JobContainer = styled.div`
    background-color: white;
    width: 100%;
    border-radius: 20px;
    height:42px;
`
const InputJob = styled.input`
    border: none;
    padding: 10px 0;
    margin-left: 20px;
    min-width: 30vw;
    outline: none;
    font-weight: 600;
    font-size: 15px;
`

const SelectPriority = styled(Select)`
    border: none !important;
    height: 42px;
    padding: 10px;
    border-radius: 20px !important;
    width:100%;
    background-color: white;
`
const AddButton = styled(Button)`
  background-color: #e91e63 !important;
  height: 42px;
  width:100%;
  border-radius: 20px !important;
  :hover{
    background-color: #ed4b82 !important;
  }
`

const JobText = styled.p`
    padding: 10px 0;
    font-size: 22px;
    font-weight: 600;
`