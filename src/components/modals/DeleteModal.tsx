import React, { FC } from 'react'
import { Modal, Box, Button } from "@mui/material";
import { ErrorOutline, DeleteForeverOutlined } from "@mui/icons-material";
import styled from "styled-components"
import { IJob } from "../../Interfaces"
import { useJobs } from '../../hooks/useJobs';

interface Props {
    handleClose(): void;
    open: boolean;
    job: IJob;
}

const DeleteModal: FC<Props> = ({ handleClose, open, job }) => {
    const { deleteJob } = useJobs();
    const handleDeleteModal = () => {
        handleClose();
        console.log(job.id);

        deleteJob(job.id)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <ModalBox>
                <ErrorIcon />
                <ErrorText>
                    Are you sure you want to delete it?
                </ErrorText>
                <ErrorBox>
                    <CancelButton
                        variant='contained'
                        onClick={handleClose}
                    >
                        Cancel
                    </CancelButton>
                    <ApproveButton
                        variant='contained'
                        onClick={handleDeleteModal}
                    >
                        <DeleteIcon />
                        Approve
                    </ApproveButton>
                </ErrorBox>
            </ModalBox>
        </Modal>
    )
}

export default DeleteModal

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 1px solid #ab003c;
  box-shadow: 24px;
  padding: 12px;
  text-align: center;
`

const ErrorIcon = styled(ErrorOutline)`
    color: #ab003c;
    font-size: 60px !important;
    margin-bottom: 1px; 
`
const DeleteIcon = styled(DeleteForeverOutlined)`
    margin-right: 5px;
`


const ErrorText = styled.p`
    font-size: 24px;
    padding: 10px;
`

const ErrorBox = styled(Box)`
    display: flex;
    margin-top: 20px;
    align-items: center !important;
    justify-content: space-around;
`

const CancelButton = styled(Button)`
    background-color: darkgray !important;
    height: 42px;
    width:40%;
    border-radius: 20px !important;
    :hover{
        background-color: lightgray !important;
    }
`
const ApproveButton = styled(CancelButton)`
    background-color: #f50057 !important;
    :hover{
        background-color: #f73378 !important;
    }
`