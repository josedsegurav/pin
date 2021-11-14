import React from "react";
import Button from '../Components/Button';
import { MDBInput } from 'mdb-react-ui-kit';

export default function Form(props) {
    return (
    <form className="margin_unset contact_form">
      <MDBInput className="margin_unset form_input" label='Name' id='typeText' type='text' onChange={props.onChangeName} />
      <MDBInput className="margin_unset form_input" label='Email' id='typeEmail' type='email' onChange={props.onChangeEmail} />
      <MDBInput className="margin_unset form_input" label='Phone' id='typePhone' type='tel' onChange={props.onChangePhoen} />
      <MDBInput className="margin_unset form_input" label='Message' id='textAreaExample' textarea rows={4} onChange={props.onChangeMessage} />
      <Button className="header__button contact_button" name="Send" type="submit" onCLick={props.onCLick}/>
      </form>
    );
  }
