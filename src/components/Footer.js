import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/quach (3).svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Github from '../assets/img/github-logo.svg';
import leetcode from '../assets/img/leetcode-svgrepo-com.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/quachthienphu " target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/quanquai.quach.1?" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/phuquach?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/quachphu"target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
                <a href="https://leetcode.com/PhuQuach/"target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="" /></a>
            </div>
            <p>© Copyright 2024.Quach Thien Phu </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}