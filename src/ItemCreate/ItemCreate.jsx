import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const defaultState = { link: "", name: "" };

export const ItemCreate = ({ onItemCreate }) => {
  const [formData, setFormData] = useState(defaultState);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        onItemCreate(formData)
        setFormData(defaultState)
    }

  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Název</Form.Label>
          <Form.Control type="text" placeholder="Název" name="name" onChange={onChange} value={formData.name}/>
        </Form.Group>
        <Form.Group controlId="link">
          <Form.Label>Link</Form.Label>
          <Form.Control type="text" placeholder="Link"  name="link" onChange={onChange} value={formData.link}/>
        </Form.Group>
        <Button variant="primary" onClick={handleSave} block>
          Přidat
        </Button>
      </Form>
    </div>
  );
};
