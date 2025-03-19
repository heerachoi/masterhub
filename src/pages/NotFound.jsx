import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const handleClick = (navigate) => {
  navigate('/')
}
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button onClick={() => handleClick(navigate)} type="primary">홈으로 이동하기</Button>
        }
      />
    </Container>

  )
};
