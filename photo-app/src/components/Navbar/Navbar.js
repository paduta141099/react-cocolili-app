import React, {useState, useEffect} from 'react';
import './nav.css';
import * as ReactBootstrap from 'react-bootstrap';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [navbar, setNavbar] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const changBackground = () => {
        if(window.scrollY >= 80) {
            console.log(window.scrollY);
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changBackground);

    return (
        <ReactBootstrap.Navbar fixed='top' expand={false} className={navbar ? 'navbar active shadow-sm' : 'navbar'}>
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="#Home" id="logo">Cocolili</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle className='text-secondary' aria-controls="offcanvasNavbar" />
                <ReactBootstrap.Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <ReactBootstrap.Offcanvas.Header closeButton>
                    <ReactBootstrap.Offcanvas.Title id="offcanvasNavbarLabel">Cocolili</ReactBootstrap.Offcanvas.Title>
                </ReactBootstrap.Offcanvas.Header>
                <ReactBootstrap.Offcanvas.Body>
                    <ReactBootstrap.Nav className="justify-content-end flex-grow-1 pe-3">
                    <ReactBootstrap.Nav.Link href="#home">Trang chủ</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#aboutus">Về chúng tôi</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#services">Dịch vụ</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Offcanvas.Body>
                </ReactBootstrap.Navbar.Offcanvas>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
    );
}

export default Navbar;