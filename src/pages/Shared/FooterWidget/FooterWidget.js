import React from 'react';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './FooterWidget.css';
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const FooterWidget = () => {
    return (
        <footer>
            <div className="py-2 footer-dark" style={{ backgroundColor: '#e7f8ee' }}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center '>
                        <Col lg={3} md={6} sm={12}>
                            {/* Footer Widget Start */}
                            <div>
                                <div className="widget-logo">
                                    <Link to='/'><img src={logo} alt="Logo" /></Link>
                                </div>
                                <ul className="p-0">
                                    <li>
                                        <h4 className="">Dhaka, Bangladesh</h4>
                                    </li>
                                    <li>
                                        <h6 className="text-success">Banani, Dhaka-1206.</h6>
                                    </li>
                                    <li>
                                        <h6><MdOutlineEmail className="text-success d-inline-block" /><a href="mailto:address@gmail.com"> address@skillup.com</a></h6>
                                    </li>
                                    <li>
                                        <h6><MdOutlineCall className="text-success d-inline-block" /><a href="tel:9702621413"> (+880) 1262-141334</a></h6>
                                    </li>
                                </ul>
                                <ul className="d-flex social-icons p-0">
                                    <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
                                    <li><a href="https://twitter.com/"><FaXTwitter /></a></li>
                                    <li><a href="https://whatsapp.com/"><FaWhatsapp /></a></li>
                                    <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                                </ul>
                            </div>
                            {/* Footer Widget End */}
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            {/* Footer Widget Link Start */}
                            <div className="d-flex flex-row justify-content-around align-items-center">
                                {/* Footer Widget Start */}
                                <div className="footer-ul">
                                    <h4 className="mb-3">Category</h4>
                                    <ul className="p-0">
                                        <li><Link to='/courses'>Web Development</Link></li>
                                        <li><Link to='/courses'>App Development</Link></li>
                                        <li><Link to='/courses'>Graphic Design</Link></li>
                                        <li><Link to='/courses'>UI/UX Design</Link></li>
                                        <li><Link to='/courses'>IELTS</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-ul">
                                    <h4 className="mb-3">Quick Links</h4>
                                    <ul className="p-0">
                                        <li><Link to='/terms'>Privacy Policy</Link></li>
                                        <li><Link to='/blog'>Discussion</Link></li>
                                        <li><Link to='/terms'>Terms & Conditions</Link></li>
                                        <li><Link to='/contact'>Customer Support</Link></li>
                                        <li><Link to='/faq'>Course FAQ’s</Link></li>
                                    </ul>
                                </div>
                                {/* Footer Widget End */}
                            </div>
                            {/* Footer Widget Link End */}
                        </Col>
                        <Col lg={3} md={6} sm={12} className="mb-4">
                            {/* Footer Widget Start */}
                            <div className="mt-4">
                                <h4 className="mb-3">Subscribe</h4>
                                <div className="">
                                    <p>Subscribe to our newsletter for exclusive updates, special offers, and the latest news delivered straight to your inbox.</p>
                                    <div className="">
                                        <form action="#">
                                            <input className='border rounded bg-white p-2 w-100 mb-2' type="email" placeholder="Email here" />
                                            <Button variant='success' className="btn-hover-dark w-100 p-2">Subscribe Now</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Footer Widget End */}
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterCopyright />
        </footer>
    );
};

export default FooterWidget;
