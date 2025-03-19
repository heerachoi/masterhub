import { Tabs } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Talk from './community/Talk';
import Question from './community/Question';

const Container = styled.div`
`

const CommunityPage = () => {
  const onChange = (key) => {
    console.log(key)
  }
  const items = [
    {
      key: '1',
      label: '토크',
      children: <Talk />,
    },
    {
      key: '2',
      label: '문의사항',
      children: <Question />
    }
  ]
  return (
    <Container>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      
    </Container>
  )
}

export default CommunityPage;
