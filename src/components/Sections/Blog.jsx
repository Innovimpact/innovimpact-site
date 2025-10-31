import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">We’ve Got the Answers You’re Looking For</h1>
            <p className="font13">
              Quick answers to your automation questions.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Why choose InnoVImpact over others?"
                text="Because we care about the small details others often overlook. It’s our vision and commitment that set us apart — we start with focused, manageable solutions and scale with you, ensuring continuous support and full project follow-through. We’re not just here for the quick win — we’re here for the long game."
                tag="FAQs"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Do I need coding skills or technical knowledge to use your solutions?"
                text="Not at all. We handle the technical side. Once it’s set up, your team can use it with simple triggers or buttons — no code required."
                tag="FAQs"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="How long does it take to get started?"
                text="Most clients see results in the first three week. We start with a discovery call, build a tailored solution, and iterate quickly based on your needs."
                tag="FAQs"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="How do you ensure data security?"
                text="We follow strict data handling policies and can implement on-premise solutions if needed. Your data never leaves your environment unless you want it to."
                tag="FAQs"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Is this affordable for small teams?"
                text="Absolutely. We price fairly based on project complexity, not company size. Many of our automations pay for themselves within weeks through saved time and efficiency gains."
                tag="FAQs"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;