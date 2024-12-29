import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap'; // react-bootstrap bileşenleri
import MyNavbar from './Navbar'; // Navbar bileşeni

const ReportPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Sales Report', date: '2024-12-20', value: 1000 },
    { id: 2, name: 'User Activity', date: '2024-12-21', value: 2000 },
    { id: 3, name: 'Revenue Report', date: '2024-12-22', value: 3000 },
    { id: 4, name: 'Customer Support', date: '2024-12-23', value: 1500 },
    { id: 5, name: 'Product Feedback', date: '2024-12-24', value: 1200 },
    { id: 6, name: 'Market Trends', date: '2024-12-25', value: 800 },
    { id: 7, name: 'User Growth', date: '2024-12-26', value: 1800 },
    { id: 8, name: 'Conversion Rate', date: '2024-12-27', value: 2200 },
    { id: 9, name: 'Traffic Analysis', date: '2024-12-28', value: 2500 },
    { id: 10, name: 'Customer Satisfaction', date: '2024-12-29', value: 1600 },
  ]);

  // Tarih değişimi fonksiyonu
  const handleDateChange = (e, type) => {
    if (type === 'start') {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  // Filtrelenmiş veri
  const filteredData = data.filter(item => {
    const itemDate = new Date(item.date);
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    return (!startDate || itemDate >= startDateObj) && (!endDate || itemDate <= endDateObj);
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <MyNavbar /> {/* Navbar bileşenini buraya ekliyoruz */}

      <h2>Report Page</h2>

      {/* Tarih Seçici */}
      <Row>
        <Col>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => handleDateChange(e, 'start')}
              className="form-control" // Bootstrap stili
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => handleDateChange(e, 'end')}
              className="form-control" // Bootstrap stili
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Rapor Tablosu */}
      <Table striped bordered hover responsive="sm" style={{ width: '100%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Report Name</th>
            <th>Date</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.value}</td>
              <td>
                <Button variant="info" size="sm">View</Button>
                <Button variant="danger" size="sm" style={{ marginLeft: '10px' }}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportPage;
