import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">🔗 Let’s Connect</h1>
            <p className="font18">Want to work with us or learn more?</p>
            <p className="font20">
              📧 <a href="mailto:innovforimpact@gmail.com" className="contactLink">innovforimpact@gmail.com</a>
            </p>
            <SocialLinks>
              🔗&nbsp;
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{" "}
              <span className="comingSoon">GitHub (coming soon)</span>
            </SocialLinks>
            <hr style={{ marginTop: "20px", border: "none", borderTop: "1px solid #ccc" }} />
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>

  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const SocialLinks = styled.div`
  margin-top: 20px;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #7620ff;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }

  .comingSoon {
    color: #aaa;
    font-style: italic;
  }
`;









