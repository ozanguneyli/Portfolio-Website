import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/FileDownloadApp.png")}
              isBlog={false}
              title="FileDownloadApp"
              description="A Windows application built with .NET 8 and Windows Forms. The app enables users to download files quickly and securely using multi-threading. Its intuitive interface allows for easy management of large downloads, including pause and resume functionality."
              ghLink="https://github.com/ozanguneyli/FileDownloadApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/SentimentAnalysis.png")}
              isBlog={false}
              title="Sentiment Analyzer"
              description="Developed a Python library that processes text data, generates embeddings, and stores them in the Qdrant vector database. The tool enables efficient similarity search and sentiment analysis, supporting scalable and fast text analytics for various NLP applications."
              ghLink="https://github.com/ozanguneyli/Sentiment-Analyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/CreditCardFraudDetection.png")}
              isBlog={false}
              title="Credit Card Fraud Detection"
              description="Trained a machine learning model to analyze transaction data and detect fraudulent credit card activities. The system leverages advanced algorithms to identify anomalies and helps prevent financial fraud in real time."
              ghLink="https://github.com/ozanguneyli/Credit-Card-Fraud-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/BiRadsClassification.png")}
              isBlog={false}
              title="Bi Rads Classification"
              description="Built a machine learning pipeline for classifying mammography images according to BI-RADS categories. The model assists radiologists by providing automated, accurate, and consistent breast cancer risk assessments from medical imaging data."
              ghLink="https://github.com/ozanguneyli/Bi-Rads-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/NamedEntityRecognition.png")}
              isBlog={false}
              title="Named Entity Recognition in Mammography Reports"
              description="Developed a Natural Language Processing solution to extract named entities from mammography radiology reports. The project automates information retrieval from medical texts, supporting clinical decision-making and research."
              ghLink="https://github.com/ozanguneyli/Mamografi-Raporlarinda-Adlandirilmis-Varlik-Tanima-NER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/MammographyReport.png")}
              isBlog={false}
              title="BI-RADS Classification from Mammography Reports"
              description="Implemented an NLP-based system to classify mammography radiology reports according to BI-RADS categories. The solution automates and standardizes breast cancer risk assessment from unstructured medical texts."
              ghLink="https://github.com/ozanguneyli/Mamografi-Metin-Analizi-ile-BI-RADS-Siniflandirmasi"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
