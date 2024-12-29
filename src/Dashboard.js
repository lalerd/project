import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const Dashboard = () => {
  // Örnek veri (grafikler için)
  const userData = [
    { name: 'Jan', users: 30 },
    { name: 'Feb', users: 50 },
    { name: 'Mar', users: 80 },
    { name: 'Apr', users: 120 },
    { name: 'May', users: 160 },
    { name: 'Jun', users: 200 },
  ];

  const contentData = [
    { name: 'Jan', content: 15 },
    { name: 'Feb', content: 30 },
    { name: 'Mar', content: 60 },
    { name: 'Apr', content: 90 },
    { name: 'May', content: 110 },
    { name: 'Jun', content: 140 },
  ];

  return (
    <div style={dashboardContainerStyle}>
      <Navbar />

      {/* Genel Bakış Kartları */}
      <div style={overviewStyle}>
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <p>245</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Content</h3>
          <p>123</p>
        </div>
        <div style={cardStyle}>
          <h3>Reports</h3>
          <p>15</p>
        </div>
        <div style={cardStyle}>
          <h3>Comments</h3>
          <p>45</p>
        </div>
      </div>

      {/* Grafikler ve İstatistikler */}
      <div style={chartSectionStyle}>
        <h2>Activity & Trends</h2>
        <div style={chartContainerStyle}>
          <div style={chartCardStyle}>
            <h4>User Growth</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={chartCardStyle}>
            <h4>Content Growth</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={contentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="content" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stil Düzenlemeleri
const dashboardContainerStyle = {
  backgroundColor: '#f5f9ee', // Sayfa arka planını kırmızı yapmak
  padding: '20px',
};

const overviewStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  marginBottom: '30px',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  textAlign: 'center',
};

const chartSectionStyle = {
  marginBottom: '30px',
};

const chartContainerStyle = {
  display: 'flex',
  gap: '20px',
};

const chartCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  flex: 1,
  textAlign: 'center',
};

export default Dashboard;
