import React, { useState } from 'react'
import styled from "styled-components"
import { Grid, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { ISearch } from "../Interfaces"
import JobTable from './JobTable'
import { useJobs } from '../hooks/useJobs'


function Search() {
    const { jobs } = useJobs()

    const [search, setSearch] = useState<ISearch["search"]>({
        searchText: "",
        priority: 0,
    })

    const hadleChange = (event: SelectChangeEvent<unknown | HTMLInputElement>) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <Wrapper item direction="column" container spacing={2}>

                <WrapperTitle container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <SearchTextContainer item>
                        <SearchText>Job List</SearchText>
                    </SearchTextContainer>
                    <SearchPriorityLenContainer item>
                        <SearchTextLen>
                            ({jobs.filter((p) => search.priority === 0 ? (p) : (p.priority === search.priority)).length}
                            /
                            {jobs.length})
                        </SearchTextLen>
                    </SearchPriorityLenContainer>
                </WrapperTitle>

                <WrapperSearch
                    container
                    direction="row"
                    alignItems="center"
                    item
                >

                    <SearchInputContent item xs={12} sm={12} md={6}>
                        <SearchContainer>
                            <SearchIcon />
                            <InputSearch placeholder='Search...' value={search.searchText} onChange={hadleChange} name="searchText" />
                        </SearchContainer>
                    </SearchInputContent>
                    <PriorityContent item xs={12} sm={12} md={6}>
                        <SelectPriority onChange={hadleChange} value={search.priority} name="priority">
                            <MenuItem value={0}>All Priority</MenuItem>
                            <MenuItem value={1}>Urgent</MenuItem>
                            <MenuItem value={2}>Regular</MenuItem>
                            <MenuItem value={3}>Trival</MenuItem>
                        </SelectPriority>
                    </PriorityContent >
                </WrapperSearch>

            </Wrapper>

            <JobTable search={search} />
        </>

    )
}

export default Search

const Wrapper = styled(Grid)`
    padding: 0px 50px;
    width: 98vw !important;
    margin-top:0  !important;
    margin-left: 0 !important;
`
const WrapperTitle = styled(Grid)`
    padding: 10px;
`
const WrapperSearch = styled(Grid)`
    background-color: #70d9e7;
    padding: 14px 0 !important;
    border-radius: 8px 8px 0 0;
`

const SearchTextContainer = styled(Grid)``
const SearchPriorityLenContainer = styled(Grid)``

const SearchInputContent = styled(Grid)`
    padding: 5px;
`
const PriorityContent = styled(Grid)`
    padding: 5px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 42px;
    border-radius: 20px;
`
const InputSearch = styled.input`
    border: none;
    padding: 10px 0;
    margin-left: 10px;
    min-width: 30vw;
    outline: none;
    font-weight: 600;
    font-size: 15px;
`

const SelectPriority = styled(Select)`
    z-index: 100;
    border: none !important;
    height: 42px;
    padding: 10px;
    border-radius: 20px !important;
    width:100%;
    background-color: white;
`

const SearchIcon = styled(SearchOutlinedIcon)`
    color: gray;
    padding: 10px;
`

const SearchText = styled.p`
    padding: 10px 0;
    font-size: 22px;
    font-weight: 600;

`

const SearchTextLen = styled.p`
    padding: 10px 0;
    font-size: 22px;
    font-weight: 400;
    color: gray;
`