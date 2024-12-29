import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import MyNavbar from './Navbar';  // Navbar bileşeni

const ContentManagement = () => {
  const [contents, setContents] = useState([
    { id: 1, title: "How to Manage Content", category: "Blog", status: "Published", date: "2024-12-29" },
    { id: 2, title: "React Basics", category: "Tutorial", status: "Draft", date: "2024-12-15" },
    // 50'den fazla içerik olabilir
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentContent, setCurrentContent] = useState({ title: "", category: "", status: "Draft", date: "" });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = () => {
    // İçerik ekleme ya da güncelleme işlemleri
    if (currentContent.id) {
      // Güncelleme işlemi
      setContents(contents.map(content => content.id === currentContent.id ? currentContent : content));
    } else {
      // Yeni içerik ekleme
      const newContent = { ...currentContent, id: contents.length + 1 };
      setContents([...contents, newContent]);
    }
    handleClose();
  };

  const handleEdit = (content) => {
    setCurrentContent(content);
    handleShow();
  };

  const handleDelete = (id) => {
    setContents(contents.filter(content => content.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <MyNavbar />  {/* Navbar bileşenini buraya ekliyoruz */}

      <h2>Content Management</h2>
      <Button variant="success" onClick={handleShow}>Add New Content</Button>

      {/* İçerik Tablosu */}
      <Table striped bordered hover className="table-bordered mt-4">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(content => (
            <tr key={content.id}>
              <td>{content.id}</td>
              <td>{content.title}</td>
              <td>{content.category}</td>
              <td>
                <Button variant={content.status === 'Published' ? 'primary' : 'warning'} size="sm">
                  {content.status}
                </Button>
              </td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleEdit(content)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(content.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal - İçerik Ekleme/Düzenleme */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentContent.id ? "Edit Content" : "Add New Content"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                value={currentContent.title} 
                onChange={(e) => setCurrentContent({ ...currentContent, title: e.target.value })} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control 
                type="text" 
                value={currentContent.category} 
                onChange={(e) => setCurrentContent({ ...currentContent, category: e.target.value })} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control 
                as="select" 
                value={currentContent.status} 
                onChange={(e) => setCurrentContent({ ...currentContent, status: e.target.value })}
              >
                <option>Draft</option>
                <option>Published</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContentManagement;
