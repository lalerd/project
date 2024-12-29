import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import MyNavbar from './Navbar';  // Navbar bileşenini içe aktarıyoruz
import 'bootstrap/dist/css/bootstrap.min.css';

// Rastgele isim oluşturma fonksiyonu
const generateRandomUser = (id) => {
  const firstNames = ["Mark", "Jacob", "Larry", "Anna", "John", "Mary", "David", "Sophia", "Michael", "Olivia"];
  const lastNames = ["Otto", "Thornton", "the Bird", "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson"];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return {
    id,
    firstName: randomFirstName,
    lastName: randomLastName,
    handle: `@${randomFirstName.toLowerCase()}`,
    status: id % 2 === 0 ? 'Active' : 'Inactive', // Durum rastgele "Active" veya "Inactive" olacak
  };
};

const Users = () => {
  // 50 kullanıcı örneği
  const [users, setUsers] = useState(
    Array.from({ length: 50 }, (_, index) => generateRandomUser(index + 1))
  );

  const [searchTerm, setSearchTerm] = useState("");

  // Kullanıcı arama fonksiyonu
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Arama sonucu filtrelenmiş kullanıcılar
  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.handle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <MyNavbar />  {/* Navbar bileşenini buraya ekliyoruz */}

      {/* Arama Alanı */}
      <div className="d-flex justify-content-center mb-3">
        <InputGroup className="mb-3" style={{ maxWidth: '350px' }}>
          <FormControl
            placeholder="Search by first name, last name, or handle"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </InputGroup>
      </div>

      {/* Kullanıcılar Tablosu */}
      <Table striped bordered hover responsive="sm" className="table-bordered" style={{ width: '100%', marginTop: '20px' }}>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.handle}</td>
              <td>
                {/* Duruma göre buton rengi: Active için primary, Inactive için danger */}
                <Button 
                  variant={user.status === 'Active' ? 'primary' : 'danger'} 
                  size="sm" 
                  style={{ width: '100%' }}
                >
                  {user.status}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
