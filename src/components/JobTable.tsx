import React, { FC, useState } from 'react'
import styled from "styled-components"
import { Grid, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
import { TableProps, IJobs, IJob, ISearch } from "../Interfaces"
import DeleteModal from './modals/DeleteModal'
import EditModal from './modals/EditModal'
import { useJobs } from '../hooks/useJobs'




const JobTable: FC<ISearch> = ({ search }) => {
    const { jobs } = useJobs()
    const [job, setJob] = useState<IJob>({
        id: "",
        name: "",
        priority: 0
    })

    const [deleteModal, setDeleteModal] = useState<IJobs["deleteModal"]>(false)
    const [editModal, setEditModal] = useState<IJobs["editModal"]>(false)

    const handleDelClick = (id: string, name: string, priority: number): void => {
        setJob({ id, name, priority });
        setDeleteModal(true)
    }
    const handleClose = (): void => {
        setDeleteModal(false)
        setEditModal(false)
    }
    const handleEditClick = (id: string, name: string, priority: number): void => {
        setJob({ id, name, priority });
        setEditModal(true)
    }

    return (
        <Wrapper container item alignItems="center">
            <TableWrapper item xs={12} sm={12} md={12}>
                <Table>
                    <tbody>
                        <TableBody>
                            <TableHead>Name</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Action</TableHead>
                        </TableBody>
                        {
                            jobs?.filter((p) => search.priority === 0 ? (p) : (p.priority === search.priority))
                                .filter((i) => {
                                    if (search.searchText === "") {
                                        return i;
                                    } else if (
                                        i.name.toLowerCase().includes(search.searchText.toLowerCase())
                                    ) {
                                        return i;
                                    }
                                    return false;
                                })
                                .map(job => (
                                    <TableBody key={job.id}>
                                        <TableContent>{job.name}</TableContent>
                                        <TableContent><PriorityContent priority={job.priority}>{
                                            job.priority === 1 ? ("Urgent") : job.priority === 2 ? ("Regular") : ("Trival")
                                        }</PriorityContent></TableContent>
                                        <TableContent>
                                            <ButtonWrapper container justifyContent="start">
                                                <DeleteContent item>
                                                    <Button onClick={() => handleDelClick(job.id, job.name, job.priority)}>
                                                        <DeleteIcon />
                                                    </Button>
                                                </DeleteContent>
                                                <EditContent item>
                                                    <Button onClick={() => handleEditClick(job.id, job.name, job.priority)}>
                                                        <EditIcon />
                                                    </Button>
                                                </EditContent>
                                            </ButtonWrapper>
                                        </TableContent>
                                    </TableBody>

                                ))
                        }

                    </tbody>
                </Table>
            </TableWrapper>
            <DeleteModal job={job} open={deleteModal} handleClose={handleClose} />
            <EditModal job={job} open={editModal} handleClose={handleClose} />
        </Wrapper>
    )
}

export default JobTable

const Wrapper = styled(Grid)`
    width: 98vw !important;
    margin-top:0  !important;
    margin-left: 0 !important;
    padding: 0 50px;

`

const TableWrapper = styled(Grid)`
    height: 48vh !important;
    overflow-y: auto;
    padding: 0 !important;
    margin: 0 !important;
    @media (max-width: 900px) {
        height: 24vh !important;

    }
`

const ButtonWrapper = styled(Grid)``

const DeleteContent = styled(Grid)``

const EditContent = styled(Grid)``

const Button = styled(IconButton)``

const DeleteIcon = styled(Delete)``

const EditIcon = styled(Edit)``

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const TableBody = styled.tr`
background-color: white;
    :hover{
        transition: all 0.2s;
        background-color: #e0f7fa;
    }
`

const TableHead = styled.th`
    background-color: #00bcd4;
    color:white;
    text-align: left;
    padding: 8px;
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 1;
`

const TableContent = styled.td`
    color:black;
    border-bottom: 1px solid lightgray;
    padding: 12px;
    font-size: 14px;
    font-weight: 400;
    max-width: 30vw;
    overflow: auto;
    white-space: nowrap; 

`
const PriorityContent = styled.div<TableProps>`
    background-color: 
        ${(props) => {
        if (props.priority === 1) {
            return "#ff1744"
        }
        else if (props.priority === 2) {
            return "#ff9100"
        }
        else {
            return "#3d5afe"
        }
    }};
    display: flex;
    justify-content: center;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    color: white;
    max-width: 60px;
`