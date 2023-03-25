import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function MNavbar() {
	return (
		<Navbar className="secondary-color shadow" expand="md">
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src="https://www.utsa.edu/_resources/images/utsa-logo.svg"
						width="250"
						height="100"
						className="d-inline-block align-text-top"
						alt="MindfulCart Logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav">
					<Button
						className="d-flex d-lg-none d-md-none flex-column justify-content-around secondary-color"
						style={{ visibility: "hidden" }}
					>
						<span className="toggler-icon top-bar" />
						<span className="toggler-icon middle-bar" />
						<span className="toggler-icon bottom-bar" />
					</Button>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="navbar-nav w-100 justify-content-center fs-3">
						<Nav.Item>
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to="/wiki">
								Wiki
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
