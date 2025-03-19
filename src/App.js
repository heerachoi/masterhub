import styled from 'styled-components';
import './App.css';
import TopMenuBar from './components/TopMenuBar';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { Footer } from './components/Footer';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const StyledHeader = styled(Header)`
  background-color: #fff;
  display: flex;
  justify-content: center;
  height: 85px;
  border-bottom: 1px solid #000;
`
const MainContent = styled.div`
  flex: 1;
  background-color: #fff;
`

function App() {
  return (
    <Wrap className="App">
      <Layout>
      <StyledHeader>
          <TopMenuBar />
      </StyledHeader>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Layout>
    </Wrap>
  );
}

export default App;
