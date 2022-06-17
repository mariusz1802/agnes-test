import React from "react"
import SectionTitle from "./SectionTitle"
import styled from "styled-components"
import { ImMobile } from "react-icons/im"
import { MdLocationOn } from "react-icons/md"
import { BsFacebook } from "react-icons/bs"
import { IoIosMail } from "react-icons/io"
import ContactForm from "./ContactForm/ContactForm"
const facebook_url = "https://www.facebook.com/Bombadesignpl-108034361531951"

function Contact() {
  return (
    <>
      <SectionTitle title="KONTAKT" id="contact" />
      <Layout>
        <Wrapper>
          {/* Contact data with icons */}
          <DataContact>
            <Title>DANE KONTAKTOWE</Title>
            <ContactWrapper>
              <A href="tel+48660409938">
                <ContactBox>
                  <IconBox>
                    <ImMobile />
                  </IconBox>
                  <ContactText>+48 660 409 938</ContactText>
                </ContactBox>
              </A>
              <A href="mailto: kontakt@agnesbistro.pl ">
                <ContactBox>
                  <IconBox>
                    <IoIosMail style={{ fontSize: "3.7rem" }} />
                  </IconBox>
                  <ContactText>kontakt@agnesbistro.pl</ContactText>
                </ContactBox>
              </A>
              <A href={facebook_url} target="__blank" rel="noopener noreferrer">
                <ContactBox>
                  <IconBox>
                    <BsFacebook />
                  </IconBox>
                  <ContactText>facebook.pl/agnesbistro</ContactText>
                </ContactBox>
              </A>
              <ContactBox>
                <IconBox>
                  <MdLocationOn
                    style={{ fontSize: "4.2rem", marginLeft: "-10px" }}
                  />
                </IconBox>
                <ContactText>
                  ul. Wąska 4 <br />
                  57-400 Nowa Ruda
                </ContactText>
              </ContactBox>
            </ContactWrapper>
          </DataContact>
          {/* Contact form */}
          <DataContact>
            <FormWrapper>
              <Title>WYŚLIJ ZAPYTANIE</Title>
              <ContactForm />
            </FormWrapper>
          </DataContact>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Contact

const Layout = styled.div`
  width: 80%;
  margin: auto;
  @media screen and(max-width:380px) {
    width: 95%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`
// *********** Contact Data cotainer start *************
const DataContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  margin-top: 100px;
  :first-child {
    border-right: 1px solid black;
  }
  @media screen and (max-width: 950px) {
    :first-child {
      border-right: none;
    }
    width: 90%;
    margin-top: 70px;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
    padding: 5px;
  }
`

const Title = styled.h3`
  font-weight: 300;
  font-size: clamp(1.5rem, 5vw, 2.1rem);
  margin-bottom: 50px;
  width: 100%;
  @media screen and (max-width: 380px) {
    font-weight: 400;
    margin-bottom: 20px;
  }
`
const ContactWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`

const A = styled.a`
  text-decoration: none;
  color: inherit;
  :nth-child(2) {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  :nth-child(3) {
    border-bottom: 1px solid black;
  }
`

const ContactBox = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  height: 100px;
  :nth-child(2) {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  :nth-child(3) {
    border-bottom: 1px solid black;
  }
`

const IconBox = styled.div`
  font-size: 3.2rem;
  display: flex;
  width: 90px;
  justify-content: start;
`

const ContactText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2rem;
  font-size: clamp(1rem, 5vw, 1.4rem);
`
// *********** Contact Data cotainer end *************

const FormWrapper = styled.div`
  width: 80%;
  margin: auto;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`
