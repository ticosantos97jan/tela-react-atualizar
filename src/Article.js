import React, { useState } from 'react';
import { Jumbotron, Container, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, UncontrolledCollapse
} from 'reactstrap';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './App.css';


const Article = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <Jumbotron  fluid  className="jum bg-dark ">
        <Container fluid  className="cont">
        <div>
          <CardBody className="card-body bg-info">
            
        <Form className="form  " type="card" action="/addproduto" method="POST">
      <FormGroup>
        <Label for ="Code">Código do produto:</Label>
        <Input className="input" type="text" name="code" id="code" placeholder="Insira o código" />
      </FormGroup>
      <FormGroup>
      <div>
      <Button className="def" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Nome
    </Button>
    <UncontrolledCollapse toggler="#toggler" >
      <Card className="limit bg-info">
        <CardBody  className="drop bg-dark border-info">
        <Input className="input" type="text" name="name" id="name" placeholder="Insira o novo nome" />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  </FormGroup>
  <FormGroup>
      <div>
    <Button className="def" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Descrição
    </Button>
    <UncontrolledCollapse toggler="#toggler" >
      <Card className="limit bg-info">
        <CardBody  className="drop bg-dark border-info">
        <Input className="input" type="text" name="name" id="name" placeholder="Insira a nova descrição" />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  </FormGroup>
  <FormGroup>
      <div>
    <Button className="def" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Preço
    </Button>
    <UncontrolledCollapse toggler="#toggler" >
      <Card className="limit bg-info">
        <CardBody  className="drop bg-dark border-info">
        <Input className="input" type="price" name="price" id="price" placeholder="Insira o novo Preço" />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  </FormGroup>
  <FormGroup>
      <div>
    <Button className="def" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Quantidade
    </Button>
    <UncontrolledCollapse toggler="#toggler" >
      <Card className="limit bg-info">
        <CardBody  className="drop bg-dark border-info">
        <Input className="input" type="number" name="quant" id="quant" placeholder="Insira quantidade" />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  </FormGroup>
      
      
      <Button className="button text-center bg-danger">Atualizar</Button>
    </Form>

     </CardBody>





        </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;