import { Container, Row, Col } from "react-bootstrap"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row noGutters>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row noGutters>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
