import { useNavigate } from 'react-router-dom'
import App from '../App'
// import { useLogin } from '../hooks/useLogin'
// import { LoginPage } from './LoginPage'

export const MainPage = () => {


  // if (!(token) || token === 'null') {
  //   return (
  //     <>
  //       {/* <Button onClick={skipLogin}>(개발용)건너뛰기</Button> */}
  //       <LoginPage
  //         loggedIn={loggedIn}
  //         onLogin={onLogin}
  //         loading={loading}
  //       />
  //     </>
  //   )
  // }

  return (
    // <ApolloWrapper>
      <App />
    // </ApolloWrapper>
  )
}
