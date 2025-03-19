import styled from 'styled-components'

export const RowGapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.$gap ? props.$gap : 0}px;
  white-space: nowrap;
`

export const ColumnGapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$gap ? props.$gap : 0}px;
`