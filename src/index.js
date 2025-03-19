import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { NotFound } from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import CommunityPage from './pages/CommunityPage';
import StudyPage from './pages/StudyPage';
import RankingPage from './pages/RankingPage';
import FaqPage from './pages/FaqPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/community',
        element: <CommunityPage />,
      },
      {
        path: '/study',
        element: <StudyPage />,
      },
      {
        path: '/ranking',
        element: <RankingPage />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
    ]
  }
])

root.render(
  <React.StrictMode>
    <ConfigProvider theme={config}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
