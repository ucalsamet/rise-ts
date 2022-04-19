import React from 'react';
import JobForm from './components/JobForm';
import styled from 'styled-components';
import Search from './components/Search';
import { Grid } from "@mui/material"
function App() {
  return (
    <Container className="App">
      <Body direction="column"
      >
        <JobForm />
        <Search />
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
  background-color: #dadbd3;
  min-height: 100vh;
`

const Body = styled(Grid)` 
  background-color: #ededed;
  height: 98vh;
  width: 98vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
`

