import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Button,
  Card,
  Row,
  Col,
  Space,
  Drawer,
  Typography,
} from 'antd';
import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ContactsOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  RocketOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const navigationItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'about',
      icon: <UserOutlined />,
      label: 'About',
    },
    {
      key: 'services',
      icon: <SettingOutlined />,
      label: 'Services',
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: 'Contact',
    },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          background: '#001529',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RocketOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '8px' }} />
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            ModernSite
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'none' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={navigationItems}
            style={{ 
              background: 'transparent',
              border: 'none',
              minWidth: '400px',
              justifyContent: 'flex-end'
            }}
          />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="mobile-nav" style={{ display: 'block' }}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ color: 'white' }}
          />
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={onCloseDrawer}
        open={drawerVisible}
        width={250}
      >
        <Menu
          mode="vertical"
          items={navigationItems}
          onClick={onCloseDrawer}
          style={{ border: 'none' }}
        />
      </Drawer>

      {/* Content */}
      <Content style={{ padding: '0', background: '#f0f2f5' }}>
        {/* Hero Section */}
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '80px 20px',
          }}
        >
          <Row justify="center">
            <Col xs={22} sm={20} md={16} lg={12}>
              <Title level={1} style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
                Welcome to ModernSite
              </Title>
              <Paragraph
                style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  marginBottom: '32px',
                  opacity: 0.9,
                }}
              >
                We create beautiful, responsive websites that help your business grow and succeed in the digital world.
              </Paragraph>
              <Button
                type="primary"
                size="large"
                style={{
                  background: '#1890ff',
                  borderColor: '#1890ff',
                  height: '48px',
                  padding: '0 32px',
                  fontSize: '16px',
                }}
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </div>

        {/* Cards Section */}
        <div style={{ padding: '80px 20px' }}>
          <Row justify="center" style={{ marginBottom: '40px' }}>
            <Col xs={22} sm={20} md={16} lg={12}>
              <Title level={2} style={{ textAlign: 'center', color: '#001529' }}>
                Our Services
              </Title>
              <Paragraph style={{ textAlign: 'center', fontSize: '16px', color: '#666' }}>
                Discover how we can help transform your business with our comprehensive solutions.
              </Paragraph>
            </Col>
          </Row>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={22} sm={20} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                bodyStyle={{ padding: '32px 24px' }}
              >
                <SettingOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
                <Title level={4} style={{ marginBottom: '16px' }}>Web Development</Title>
                <Paragraph style={{ color: '#666', lineHeight: 1.6 }}>
                  Custom websites built with modern technologies, optimized for performance and user experience.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={22} sm={20} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                bodyStyle={{ padding: '32px 24px' }}
              >
                <UserOutlined style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }} />
                <Title level={4} style={{ marginBottom: '16px' }}>UI/UX Design</Title>
                <Paragraph style={{ color: '#666', lineHeight: 1.6 }}>
                  Beautiful, intuitive designs that engage users and drive conversions for your business.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={22} sm={20} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                bodyStyle={{ padding: '32px 24px' }}
              >
                <RocketOutlined style={{ fontSize: '48px', color: '#fa541c', marginBottom: '16px' }} />
                <Title level={4} style={{ marginBottom: '16px' }}>Digital Marketing</Title>
                <Paragraph style={{ color: '#666', lineHeight: 1.6 }}>
                  Strategic marketing solutions to boost your online presence and reach your target audience.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          textAlign: 'center',
          background: '#001529',
          color: 'white',
          padding: '40px 20px',
        }}
      >
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={12} style={{ marginBottom: '16px' }}>
            <Paragraph style={{ color: 'white', margin: 0, opacity: 0.8 }}>
              © 2025 ModernSite. All rights reserved.
            </Paragraph>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Space size="large">
              <FacebookOutlined style={{ fontSize: '20px', color: '#1890ff', cursor: 'pointer' }} />
              <TwitterOutlined style={{ fontSize: '20px', color: '#1890ff', cursor: 'pointer' }} />
              <InstagramOutlined style={{ fontSize: '20px', color: '#1890ff', cursor: 'pointer' }} />
              <LinkedinOutlined style={{ fontSize: '20px', color: '#1890ff', cursor: 'pointer' }} />
            </Space>
          </Col>
        </Row>
      </Footer>

      {/* Custom styles for responsive navigation */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }

        .ant-card:hover {
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }

        .ant-btn:hover {
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }
      `}</style>
    </Layout>
  );
}

export default App;