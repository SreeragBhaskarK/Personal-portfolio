import axios from "axios"
import React, { useState } from "react"



export const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        email_subject:'',
        message:''
    })
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        axios.post('https://euq0in1rz3.execute-api.us-east-1.amazonaws.com/',formData).then((response)=>{
            console.log(response);
            if(response.data.success){
                setFormData({name:'',
                email:'',
                phone:'',
                email_subject:'',
                message:''})
            }
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    return (
        <>
            <section className="contact" id="contact">
                <h2 className="heading">Contact Me!</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" name='name'  onChange={(e)=>setFormData((prevFormData)=>({...prevFormData,name:e.target.value}))} value={formData.name} placeholder="Full Name" required />
                            <span className="focus"></span>
                        </div>

                        <div className="input-field">
                            <input name='email'  onChange={(e)=>setFormData((prevFormData)=>({...prevFormData,email:e.target.value}))} value={formData.email} type="email" placeholder="Email Address" required />
                            <span className="focus"></span>
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="number" placeholder="Mobile Number" name='phone'  onChange={(e)=>setFormData((prevFormData)=>({...prevFormData,phone:e.target.value}))} value={formData.phone} />
                            <span className="focus"></span>
                        </div>

                        <div className="input-field">
                            <input type="text" name='email_subject'  onChange={(e)=>setFormData((prevFormData)=>({...prevFormData,email_subject:e.target.value}))} value={formData.email_subject} placeholder="Email Subject"  />
                            <span className="focus"></span>
                        </div>
                    </div>

                    <div className="textarea-field">
                        <textarea
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="Your Message"
                            required 
                            name='message'  onChange={(e)=>setFormData((prevFormData)=>({...prevFormData,message:e.target.value}))} value={formData.message}
                        ></textarea>
                        <span className="focus"></span>
                    </div>

                    <div className="btn-box btns">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact