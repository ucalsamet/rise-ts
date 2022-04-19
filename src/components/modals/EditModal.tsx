import React, { FC, useState } from "react";
import { Modal, Box, Select, MenuItem, Button, Grid, SelectChangeEvent } from "@mui/material";
import { Edit } from "@mui/icons-material";
import styled from "styled-components"
import { IJob } from "../../Interfaces"
import { useJobs } from "../../hooks/useJobs";

interface Props {
    handleClose(): void;
    open: boolean;
    job: IJob;
}


const EditModal: FC<Props> = ({ handleClose, open, job }) => {
    const [jobPriority, setJobPriority] = useState<number>(0);
    const { editJob } = useJobs()
    const handleUpdateModal = () => {
        if (jobPriority === 0) {
            return
        }
        editJob(job.id, jobPriority)
        setJobPriority(0)
        handleClose();
    };

    const handleChange = (event: SelectChangeEvent<unknown | HTMLInputElement>) => {
        setJobPriority(Number(event.target.value))
    }
    return (
        <Modal open={open} onClose={handleClose}>
            <ModalBox>
                <EditText>
                    Job Edit
                </EditText>
                <form>
                    <WrapperJob
                        container
                        item
                        direction="column"
                        alignItems="start"
                        justifyContent="start"
                        textAlign="start">

                        <JobContent item xs={12} sm={12} md={6}>
                            <JobContainer>
                                <InputJob placeholder={job.name} disabled name="name" />
                            </JobContainer>
                        </JobContent>
                        <PriorityContent item xs={12} sm={12} md={4}>
                            <SelectPriority name="priority" value={jobPriority} onChange={handleChange} >
                                <MenuItem value={0} disabled>
                                    Choose
                                </MenuItem>
                                <MenuItem value={1}>Urgent</MenuItem>
                                <MenuItem value={2}>Regular</MenuItem>
                                <MenuItem value={3}>Trival</MenuItem>
                            </SelectPriority>
                        </PriorityContent >
                    </WrapperJob>

                    <EditBox>
                        <CancelButton
                            onClick={handleClose}
                        >
                            Cancel
                        </CancelButton>
                        <SaveButton
                            onClick={handleUpdateModal}
                        >
                            <EditIcon />
                            Save
                        </SaveButton>
                    </EditBox>
                </form>
            </ModalBox>
        </Modal>
    );
}

export default EditModal

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 1px solid #ffc400;
  box-shadow: 24px;
  padding: 12px;
  text-align: center;
`

const EditText = styled.p`
    font-size: 24px;
    padding: 10px;
`

const EditBox = styled(Box)`
    display: flex;
    margin-top: 20px;
    align-items: center !important;
    justify-content: space-around;
`

const CancelButton = styled(Button)`
    background-color: darkgray !important;
    color:white !important;
    height: 42px;
    width:40%;
    border-radius: 20px !important;
    :hover{
        background-color: lightgray !important;
    }
`

const SaveButton = styled(CancelButton)`
    background-color: #ffc400 !important;
    :hover{
        background-color: #ffcf33 !important;
    }
`
const EditIcon = styled(Edit)`
    margin-right: 5px;
`

const WrapperJob = styled(Grid)``
const JobContent = styled(Grid)`
    padding: 5px;
`
const PriorityContent = styled(Grid)`
    padding: 5px;
    width: 100%;
`
const JobContainer = styled.div`
    background-color: lightgrey;
    min-width: 29vw;
    border-radius: 20px;
    height:42px;
    /* min-width: 23vw; */
`

const InputJob = styled.input`
    border: none;
    padding: 10px 0;
    margin-left: 20px;
    /* max-width: 22vw; */
    width: 10vw;
    outline: none;
    font-weight: 600;
    font-size: 15px;
    background-color: transparent;
`

const SelectPriority = styled(Select)`
    border: none !important;
    height: 42px;
    /* padding: 10px; */
    border-radius: 20px !important;
    min-width: 29vw;
    background-color: white;
    outline-color:#ffcf33 !important;
`


