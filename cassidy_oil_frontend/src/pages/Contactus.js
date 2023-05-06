import axios from 'axios';
import { useState } from 'react';


export default function ContactUs() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        document.getElementById('progress-bar').classList.remove("invisible")
        window.scrollTo(0, 0);
        
        const res1 = await axios.post('https://apps.nativetalk.com.ng:447/flsk/send-mail', {
            client: 'CassidyOil',
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            email: email,
            to_email: "contact@cassidyoil.com",
            email_template: "cassidy_contact_us",
            message: message,
        })
        
        if (res1.error) {
            console.log('error')
            alert('an error occured')
            document.getElementById('progress-bar').classList.add("invisible")
        } else {
            console.log('success')
            alert("Thank you for contacting us, we will get back to you.")
            document.getElementById('progress-bar').classList.add("invisible")
        }
    }

    return (
        <>
            <div className="position-relative px-5 mt-5 d-flex flex-column align-items-center justify-content-center" style={{
                backgroundColor: '#CBCBCB', paddingTop: '90px', paddingBottom: '60px'
                }}>
                <h1 className="fw-bold display-3" style={{color: '#777777'}}>Contact Us</h1>
                <div>
                
                <progress id="progress-bar"  aria-label="Content loading…" className='invisible'></progress></div>
                
            </div>
            <div className="p-5 mb-5">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col">
                            <label for="firstName">First Name</label>
                            <input required onKeyUp={(e) => setFirstName(e.target.value)} type="text" id="firstName" className="mt-2 form-control form-control-lg" />
                        </div>
                        <div className="col">
                            <label for="firstName">Last Name</label>    
                            <input required onKeyUp={(e) => setLastName(e.target.value)} type="text" id="lastName" className="mt-2 form-control form-control-lg" />
                        </div>
                    </div>
        
                    <div className="row mt-4">
                        <div className="col">
                            <label for="firstName">Phone Number</label>
                            <input required onKeyUp={(e) => setPhone(e.target.value)} type="phone" id="firstName" className="mt-2 form-control form-control-lg" />
                        </div>
                        <div className="col">
                            <label for="firstName">Email Address</label>    
                            <input required onKeyUp={(e) => setEmail(e.target.value)} type="email" id="lastName" className="mt-2 form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <textarea required onKeyUp={(e) => setMessage(e.target.value)} placeholder="type message" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>

                    <button type="submit" className="mt-4 py-md-3 btn btn-warning text-white w-50" style={{backgroundColor: '#F8A135'}}>Send</button>
                </form>            
            </div>                
        </>
    )
}