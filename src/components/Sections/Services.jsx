import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1_MCinLoihNyqF9MZbhmXORg (1).jpg";
import AddImage2 from "../../assets/img/add/2.bf428a23.png";
import AddImage3 from "../../assets/img/add/3.0fb8f7f8.png";
import AddImage4 from "../../assets/img/add/4.bff77eac.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold"> What We Build</h1>
            <p className="font14">
             🔧 All with one goal : simplify your workflows — and scale your impact.
              <br />
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="dash"
                title="📊 Web Data workflows, dashboards"
                subtitle="We streamline the collection, transformation, and visualization of web-based data. Whether it's monitoring real-time KPIs or tracking external data, we build intuitive dashboards and automated alerts that help teams stay informed and make fast, data-driven decisions."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="🧠 AI-enhanced business automation"
                subtitle="We bring intelligence to your operations. From predictive analytics to intelligent document processing, our AI-driven automations help reduce manual workload, uncover insights, and accelerate business outcomes with minimal human input."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title={
                  <>
                    🤖 RPA
                    <br />
                    & task bots
                  </>
                }
                subtitle="Robotic Process Automation (RPA) and smart task bots handle rule-based, repetitive tasks with speed and precision. From data entry to system integrations, they ensure high-volume operations are executed flawlessly—24/7."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="📩 Email + Excel automations"
                subtitle="We automate repetitive email and spreadsheet tasks, such as daily report generation, data extraction, or conditional email triggers. This cuts down on errors and time wasted, allowing your team to focus on more strategic work and tasks."
              />
            </ServiceBoxWrapper>
            {/* <ServiceBoxWrapper>
              <ServiceBox icon="browser" title="🔗 Integrations (Teams, Gmail, Microsoft 365, Power BI, Google Workspace)" subtitle="" />
            </ServiceBoxWrapper> */}
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold"></h4>
                <h2 className="font40 extraBold">The Value We Bring</h2>
                <p className="font15 semiBold">
                  ✅ Save hours of manual work weekly <br />
                  📊 Improve reporting accuracy and consistency <br />
                  ⚡ Get real-time insights instead of static reports <br />
                  💸 Cut operational costs by reducing manual overhead <br />

                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  {/* <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div> */}
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <Link to="contact" smooth={true} duration={500} offset={-80}>
                    <FullButton title="Contact Us" border />
                  </Link>
                </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
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
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;