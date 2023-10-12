import React, { useState } from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Router from '../../router';
import Home from '../Home';
import About from '../About';
const { Sider, Content, Footer } = Layout;
const PageLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sideBar = [
    {
      icon: React.createElement(VideoCameraOutlined),
      key: 'home',
      label: <Link to={'/'}>首页</Link>,
    },
    {
      icon: React.createElement(UploadOutlined),
      key: 'about',
      label: <Link to={'/about'}>About</Link>,
    },
    {
      icon: React.createElement(UserOutlined),
      key: 'dashboard',
      label: <Link to={'/dashboard'}>Dashboard</Link>
    },
    {
      icon: React.createElement(UserOutlined),
      key: 'table',
      label: <Link to={'/table'}>表格</Link>
    },
    {
      icon: React.createElement(UserOutlined),
      key: 'antv',
      label: <Link to={'/antv'}>可视化</Link>
    },
  ]
  return (
    <Layout className='h-[100vh]'>
      <Sider
        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['home']}
          items={sideBar}
        />
      </Sider>
      <Layout>
        <Content className='h-full bg-[#ffffff]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <iframe src={location.pathname} className='w-full h-full'></iframe> */}
          <Router />
        </Content>
        <Footer className='text-center'>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
export default PageLayout
