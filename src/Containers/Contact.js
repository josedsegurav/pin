import React ,{useState} from 'react';
import contactImg from '../images/contact-image.png';
import { MDBInput } from 'mdb-react-ui-kit';
import '../App.css';

function Contact(){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [message,setMessage]=useState("")

  /*   const [validForm,setValidForm]=useState({
        field: {},
        error: {},
        send: "false"
    }); */

    /* const [validData, setValidData] = useState({
        nameErr: "",
        emailErr: "",
        phoneErr: "",
        messageErr: ""
    })

    const validate = () => {
        let nameErr = "";
        if (!setValidData) {
            nameErr = "Ingresa tus nombres y apellidos."
        }
        if (nameErr) {
            setValidData({nameErr});
            return false;
        }
        return true;


    } */

    async function handleSubmit(){
        let formData = {name,email,phone,message}

        //let result = await fetch("http://localhost:8000/api/form",{
        let result = await fetch("https://laravel-api-josesegura.herokuapp.com/api/form",{
        method:'POST',
        body: JSON.stringify(formData),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    })
        result= await result.json()
        console.warn(result)
    }



    

       /*  validateForm (){
            let field = this.state.field;
            let error ={};
            let validForm = true;

            if (!field["name"]){
                validForm = false;
                error["name"] = "Ingresa tus nombres y apellidos."
            }

            
            if (!field["email"]){
                validForm = false;
                error["email"] = "Ingresa tu correo electrónico."
            }

            
            if (!field["phone"]){
                validForm = false;
                error["phone"] = "Ingresa tu número de teléfono."
            }

            
            if (!field["message"]){
                validForm = false;
                error["message"] = "Ingresa un mensaje."
            }

            this.setState({
                error: error
            });

            return validForm;
        }

    } */

    return(
        <section id="contact">
            <div className="contactDiv"> 
            <div className="form_div">
            <h2 class="about__h2 contact_h2">
                Get in touch <br /><span className="margin_unset">We are hiring!</span>
            </h2>

<form className="margin_unset contact_form">
    <div className= "inputDiv">
      <MDBInput className="margin_unset form_input" label='Name' id='typeText' type='text' required value={name} onChange={(e)=>setName(e.target.value)} />
        <span className="formError" ></span>
    </div>
    <div className= "form_error">
      <MDBInput className="margin_unset form_input" label='Email' id='typeEmail' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <span>Error</span>
      </div>
      <div className= "form_error">
      <MDBInput className="margin_unset form_input" label='Phone' id='typePhone' type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} />
      <span>Error</span>
      </div>
      <div className= "form_error">
      <MDBInput className="margin_unset form_input" label='Message' id='textAreaExample' textarea rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} />
      <span>Error</span>
      </div>
      <button onClick={handleSubmit} className="header__button contact_button" >Send</button>
      </form>
        </div>
        
        <img className="contact_img" src={contactImg} alt="contact" />
        </div>
        </section>
    )
}

export default Contact