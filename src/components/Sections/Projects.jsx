import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/image_2_automating_member_onboarding_sequences (1).webp";
import ProjectImg2 from "../../assets/img/projects/analysis-brainstorming-business-1571699 (1).jpg";
import ProjectImg3 from "../../assets/img/projects/ZfSaIHYkiKrtlJ72_RPAWorkflow.jpg";
import ProjectImg4 from "../../assets/img/projects/survey-form-analysis-feedback-inspection-600nw-2458102065 (2).webp";
import ProjectImg5 from "../../assets/img/projects/hand-drawn-flat-design-devops-illustration_23-2149379503.jpg";
import ProjectImg6 from "../../assets/img/projects/10-things-to-consider-when-choosing-a-test-automation-tool.webp";
import AddImage2 from "../../assets/img/add/businessman-glancing-window-highrise-office-3177_t (1).jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Expected Realizations </h1>
            <p className="font15">
               🚀 Intelligent Automation Use Cases
              <br />
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="📩 Email & Report Automation at Scale"
                text="Automatically extract structured data from PDF attachments, Excel files, or even email bodies. Clean, normalize, and push results to Google Drive, SharePoint, or auto-send personalized reports — zero manual effort."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="📊 Live Business Dashboards for Instant Clarity"
                text="We turn complex, messy data into clean, real-time Power BI dashboards — enabling managers to track KPIs, spot trends, and make decisions before delays or errors ever occur."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="🤖 RPA-Powered Workflow Automation"
                text="Eliminate repetitive tasks like copy-pasting between Excel and CRMs or forwarding email chains. Our bots operate 24/7, reducing human error and freeing your team for higher-value work."
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="🧼 Smart Data Reconciliation & Quality Checks"
                text="Automatically compare data between systems (e.g. internal tools vs. vendor files), flag inconsistencies, and clean large datasets at scale — ensuring reliable reporting and confident decisions."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="🔗 Seamless Integration Between Business Tools"
                text="Connect Outlook, Gmail, Excel, SharePoint, and CRMs into one intelligent system. Trigger workflows, approvals, or alerts across tools using Python, Power Automate, or Google Apps Script."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="🛠️ Custom Automation Scripts for Unique Business Needs"
                text="From matching inconsistent naming in reports to building auto-updating reference tables — we build Python-based tools that adapt to your operations and scale as you grow."
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <FullButton title="Start Now" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Stop wasting hours. Start unlocking value.</h4>
              <h2 className="font40 extraBold">💼 Built for Busy, Ambitious Teams</h2>
              <p className="font12">
                Whether you're a department head drowning in manual reports, or a growing company seeking to modernize operations — InnoVImpact delivers automation with measurable ROI.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                {/* <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div> */}
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <Link to="contact" smooth={true} duration={500} offset={-80}>
                    <FullButton title="Contact Us" border />
                  </Link>
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
