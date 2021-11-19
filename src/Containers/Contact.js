import React ,{useState} from 'react';
import contactImg from '../images/contact-image.png';
import '../App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { sendEmail } from '../axios/indesx';



function Contact(){

  /*   const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [message,setMessage]=useState("") */
    const [error,setError]=useState(null);


    const schema = yup.object().shape({
        name: yup.string().required('Ingresa tus nombres y apellidos.'),
        email: yup.string().required('Ingresa tu correo electrónico.'),
        phone: yup.string().required('Ingresa tu número de teléfono.'),
        message: yup.string().required('Ingresa un mensaje.'),
      });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    async function submitValidation (data) {

         //let result = await fetch("http://localhost:8000/api/form",{
            let result = await fetch("https://laravel-api-josesegura.herokuapp.com/api/form",{
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
                }
            }); if(result.ok) {
                alert('Datos Guardados')
            }
                result= await result.json()
                result = sendEmail(data)
                .catch(err => {
                    alert("Algo salio mal en el envio del correo");
                })
    }


   /*  async function sendForm(){

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
        result = sendEmail(formData)
    } */


    return(
        <section id="contact">
            <div className="contactDiv"> 
            <div className="form_div">
            <h2 class="about__h2 contact_h2">
                Get in touch <br /><span className="margin_unset">We are hiring!</span>
            </h2>

<form onSubmit={handleSubmit(submitValidation)} className="margin_unset contact_form">
    <div className= "inputDiv">
        <input className="margin_unset form_input" type="text" name="name" placeholder="Name" {...register('name')} />
      <p className="form_error" > {errors.name?.message} </p>
    </div>
    <div className= "inputDiv">
    <input className="margin_unset form_input" type="text" name="email" placeholder="Email" {...register('email')} />
      <p className="form_error"> {errors.email?.message} </p>
      </div>
      <div className= "inputDiv">
      <input className="margin_unset form_input" type="text" name="phone" placeholder="Phone" {...register('phone')} />
      <p className="form_error"> {errors.phone?.message} </p>
      </div>
      <div className= "inputDiv">
      <input className="margin_unset form_input" type="text" name="message" placeholder="Message" {...register('message')}/>
      <p className="form_error"> {errors.message?.message} </p>
      </div>
      <button type="submit"  className="header__button contact_button">Send</button>
      </form>
        </div>
        
        <img className="contact_img" src={contactImg} alt="contact" />
        </div>
        </section>
    )
}

export default Contact