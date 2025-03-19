import React from 'react';
import { ColumnGapContainer, RowGapContainer } from '../../theme/style';
import styled from 'styled-components';

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`
const Talk = () => {
  return (
    <RowGapContainer $gap={15}>
      <ImgContainer>이미지</ImgContainer>
      <ColumnGapContainer>
        <div>엑사원 모델 사용가능한가요?</div>
        <div>대회마다 사전학습 모델에 대한 규식이 있는데 법적 제약이 없는지 어떻게 확인하...</div>
        <RowGapContainer $gap={10}>
          <div>success23</div>
          <div>2</div>
          <div>2025.0101</div>
        </RowGapContainer>
      </ColumnGapContainer>
      <div>21</div>
    </RowGapContainer>
  );
}

export default Talk;
