import React, { Component } from "react"
import * as styles from "./Contact.module.scss"
import Input from "./Input/Input"
import AOS from "aos"
import Button from "./Button/Button"
import emailjs from "emailjs-com"
import PropTypes from "prop-types"
import { FormErrors } from "./FormErrors"
import Modal from "./Modal/Modal"

class Form extends Component {
  constructor(props) {
    super(props)
    this.setShow = this.setShow.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.sendEmail = this.sendEmail.bind(this)

    this.initialState = {
      subject: "",
      name: "",
      phonenumber: "",
      email: "",
      message: "",
      formErrors: {
        subject: "",
        name: "",
        phonenumber: "",
        email: "",
        message: "",
      },
      subjectValid: false,
      nameValid: false,
      phonenumberValid: true,
      emailValid: false,
      messageValid: false,
      show: false,
      formValid: false,
    }
    this.state = this.initialState
  }

  resetForm() {
    this.setState(this.initialState)
  }

  compondentDidMount() {
    AOS.init(
      {
        duration: 1000,
      },
      []
    )
  }

  setShow() {
    const currentState = this.state.show
    this.setState({ show: !currentState })
  }

  sendEmail(e) {
    e.preventDefault()
    this.resetForm()
    this.setShow()
    emailjs
      .sendForm(
        "service_qgqt86q",
        "template_yd9zjxh",
        e.target,
        "user_1TdvSO4giHTFbWcnfWoJ4"
      )
      .then(
        () => {},
        () => {}
      )
  }

  //Validation for the form fields
  handleUserInput(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let subjectValid = this.state.subjectValid
    let nameValid = this.state.nameValid
    let phonenumberValid = this.state.phonenumberValid
    let emailValid = this.state.emailValid
    let messageValid = this.state.messageValid

    switch (fieldName) {
      case "subject":
        subjectValid = value.length >= 4
        fieldValidationErrors.subject = subjectValid ? "" : "Zbyt krórki temat"
        break
      case "name":
        nameValid = value.length >= 3
        fieldValidationErrors.name = nameValid ? "" : "Zbyt krótkie imię"
        break
      case "email":
        emailValid = value.match(
          /^(([^<>()[\],;:\s@"]+([^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i
        )
        fieldValidationErrors.email = emailValid ? "" : "Niepoprawny email"
        break
      case "phonenumber":
        phonenumberValid =
          value.match(/((\+\d{2}|00\d{2}|0)\d{7,9})/g) || value.length === 0
        fieldValidationErrors.phonenumber = phonenumberValid
          ? ""
          : "Niepoprawny numer telefonu"
        break
      case "message":
        messageValid = value.length >= 10
        fieldValidationErrors.message = messageValid
          ? ""
          : "Zbyt krótka wiadomość"
        break
      default:
        break
    }

    //Check - if input field is empty
    if (!value) {
      fieldValidationErrors[fieldName] = value.length === 0 && ""
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        subjectValid: subjectValid,
        nameValid: nameValid,
        emailValid: emailValid,
        phonenumberValid: phonenumberValid,
        messageValid: messageValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.subjectValid &&
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.phonenumberValid &&
        this.state.messageValid,
    })
  }

  render() {
    return (
      <div className={styles.column} id="formularz">
        <Modal
          onClose={this.setShow}
          btnTitle="OK"
          show={this.state.show}
          header="Dziękuje za wiadomość"
          description="Odpowiem najszybciej jak to możliwe"
        />

        <form onSubmit={this.sendEmail} autoComplete="none">
          <Input
            type="text"
            placeholder="Temat"
            maxLength="70"
            name="subject"
            value={this.state.subject}
            onChange={event => this.handleUserInput(event)}
            ownClass={styles.error}
            required
          />
          <FormErrors formErrors={this.state.formErrors.subject} />

          <Input
            type="text"
            placeholder="Imię"
            maxLength="30"
            name="name"
            value={this.state.name}
            onChange={event => this.handleUserInput(event)}
            required
          />
          <FormErrors formErrors={this.state.formErrors.name} />
          <Input
            type="text"
            name="email"
            placeholder="Emial"
            maxLength="40"
            value={this.state.email}
            onChange={event => this.handleUserInput(event)}
            required
          />
          <FormErrors formErrors={this.state.formErrors.email} />
          <Input
            type="text"
            name="phonenumber"
            maxLength="17"
            placeholder="Telefon"
            value={this.state.phonenumber}
            onChange={event => this.handleUserInput(event)}
          />
          <FormErrors formErrors={this.state.formErrors.phonenumber} />
          <textarea
            className={styles.textarea}
            placeholder="Wiadomość"
            rows="8"
            name="message"
            value={this.state.message}
            maxLength="300"
            onChange={event => this.handleUserInput(event)}
            cols="50"
          ></textarea>
          <FormErrors formErrors={this.state.formErrors.message} />
          <Button
            title="Wyślij"
            buttonColor="green"
            disabled={!this.state.formValid}
          />
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  subject: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phonenumber: PropTypes.number.isRequired,
}

export default Form
