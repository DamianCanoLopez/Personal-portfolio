import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-2-vueJS.png";
import projImg3 from "../assets/img/project-3-HTML-CSS-Static.png";
import projImg4 from "../assets/img/project-4-HTML-CSS-JS.png";
import projImg5 from "../assets/img/Project-5-vueJs.png";
import projImg6 from "../assets/img/project-6-Next-js.PNG"
import projImg7 from "../assets/img/project-7-vue-js.png"
import projImg8 from "../assets/img/project-8-vue-js.png"
import projImg9 from "../assets/img/project-9-vue-js.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dental Clinic React",
      description: "Development of functions and visualization",
      imgUrl: projImg1,
      UrlWeb: "https://dentalclinic1react.netlify.app/"
    },{
      title: "Form VueJs",
      description: "Development of functions and visualization in Vue JS",
      imgUrl: projImg2,
      UrlWeb: "https://form-vuejs2023.netlify.app/"
    },{
      title: "Rick and Morty Next js consumption",
      description: "Development of functions and visualization in Next JS",
      imgUrl: projImg6,
      UrlWeb: "https://rick-and-morty-next-js-sandy.vercel.app/"
    },{
      title: "Todo App",
      description: "Development of functions and visualization in Vue JS",
      imgUrl: projImg7,
      UrlWeb: "https://todo-app-cdcl.netlify.app/"
    },{
      title: "Task Board",
      description: "Development of functions and visualization in Vue JS",
      imgUrl: projImg8,
      UrlWeb: "https://task-board-cdcl.netlify.app/"
    },{
      title: "Split Bill",
      description: "Development of functions and visualization in Vue JS",
      imgUrl: projImg9,
      UrlWeb: "https://split-bill-app-cdcl.netlify.app/"
    },{
      title: "Fake api vue js consumption",
      description: "Development of functions and visualization in Vue JS",
      imgUrl: projImg5,
      UrlWeb: "https://fake-api-vue-js-consumption.netlify.app/"
    },{
      title: "Dynamic form in html css and js",
      description: "Development of functions in js and visualization in html and css",
      imgUrl: projImg4,
      UrlWeb: "https://form-basic-html-css-js.netlify.app/"
    },{
      title: "Static layout in html css",
      description: "Desktop and mobile view with html and css",
      imgUrl: projImg3,
      UrlWeb: "https://maquetado-html-css.netlify.app/"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section you will find some of my personal projects, this part of the portfolio will have updates, as I do new projects 😁.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>New projects with the next update 😀</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}