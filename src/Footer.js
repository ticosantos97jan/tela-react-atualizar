import React from 'react';
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <footer borderless className="footer bg-info text-center" > © 2020 Copyright:
     <a className="empresa text-dark" href="https://recodejr.com/" >Trainee</a>
    </footer>
  );
}

export default Footer;