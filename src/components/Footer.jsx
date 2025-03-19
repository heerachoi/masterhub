import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ColumnGapContainer, RowGapContainer } from '../theme/style'

const FooterContainer = styled.div`
  padding: 36px;
  border-top: 1px solid #cccccc;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  gap: 5px;
  justify-content: space-around;
`
const Info = styled.div`
  color: #666;
  text-align: left;
`

export const Footer = () => {
  const location = useLocation()
  const isFooterValidLocation = location.pathname === '/community' || location.pathname === '/' || location.pathname === '/faq' || location.pathname === '/stydy' || location.pathname === '/ranking' 
  return (
    <>
      {
        isFooterValidLocation && (
          <FooterContainer>
            <Container>
              <ColumnGapContainer $gap={3}>
                <Info><span style={{ color: 'red' }}>COPYRIGHT</span> © all rights reserved.</Info>
              </ColumnGapContainer>
            </Container>
          </FooterContainer>
        )
      }
    </>
  )
}
