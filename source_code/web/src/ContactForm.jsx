import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('');
  const [done, setDone] = useState(false);
  const [fail, setFail] = useState(false);
  const [loading, setLoading] = useState(false);

  

  const phoneNumber = "+19299001378"; 
  const prefilText = "Hello, I'm interested in your services!"; 


  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    const formData = {
        name: name,
        email: email,
        message: `Address: ${address}\nmessage`,
      };
    axios.post(`${props.host}/send-email`, formData)
    .then(function (response) {
      // Success
      setLoading(false)


    })
    .catch(function (response) {
    //handle error
    console.log(response);
    setFail(true)
    setLoading(false)

    });

    setDone(true)
  };

  const handleSMSClick = () => {
    const link = document.createElement("a");
    link.href = `sms:${phoneNumber}?body=${encodeURIComponent(prefilText)}`;
    link.click();
  };

  const handleCallClick = () => {
    const link = document.createElement("a");
    link.href = `tel:${phoneNumber}`;
    link.click();
  };

  if (loading)
  {
    return (
      <div style = {{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        }}>
        <img src = 'loading.gif' alt="loading" width= "100px"></img>
        <p style={{ fontSize:'30px', fontWeight:'100', textAlign: 'center'}}>Sending...</p>
      </div>
    )
  }

  if (done)
  {
    if (fail)
    {
      return (
        <div style = {{
          display: 'flex', 
          padding: '20%', 
          alignItems: 'center',
          flexDirection: 'column',}}>
  
          <h1 style = {{color: 'rgb(92, 119, 226)'}}>Oh no!</h1>
          <p style = {{ color: 'gray'}}>There was an error sending your message. Please try again later.</p>
        </div>
        )
    }
    else
    {
      // Success
      return (
      <div style = {{
        display: 'flex', 
        padding: '20%', 
        alignItems: 'center',
        flexDirection: 'column',}}>

        <h1 style = {{color: 'rgb(92, 119, 226)'}}>Success!</h1>
        <p style = {{ color: 'gray'}}>Your message has been sent</p>
      </div>
      )
    }
  }

  // Message not yet sent: Show form

  return (
    <div style = {{margin:'20px', display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    }}>
        <img src = 'email.png' alt="email icon" width= "100px"></img>
        <p style={{ fontSize:'30px', fontWeight:'100', textAlign: 'center', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>LET'S GET IN TOUCH.</p>
        
        <div >
            <form onSubmit={handleSubmit} >
              <input style = {{marginBottom:'5px'}}type="text" class='form-control  'value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
              <input style = {{marginBottom:'5px'}}type="tel" class='form-control  ' pattern="[0-9]{10}"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Phone" required/>
              <input style = {{marginBottom:'5px'}}type="text" class='form-control  'value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
              <textarea style = {{marginBottom:'5px', height: 200}}class='form-control  'value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Brief description of work" required />
              <button type="submit" class="btn btn-light">Send Message</button>
            </form>
        </div>
    
        {/* Phone Message */}
        {props.isMobile && (
          <div style={{ gap: 20, display: "flex", flexDirection: "row", alignSelf: "center", bottom: 0, position: "absolute", margin: 15}}>
            <button
              onClick={() => {
                handleCallClick();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                borderRadius: "50px",
                padding: "10px 20px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="phone.png"
                alt={"phone"}
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </button>

            <button
              onClick={() => handleSMSClick()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                borderRadius: "50px",
                padding: "10px 20px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="text.png"
                alt={"text"}
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </button>
          </div>
        )}
        {!props.isMobile && (
          <div style={{ gap: 20, display: "flex", flexDirection: "row", alignSelf: "center", bottom: 0, position: "absolute", margin: 15}}>

            <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "50px",
              padding: "10px 20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              fontWeight: "100",
              backgroundColor: "white",
            }}
            >
            <img
              src="phone.png"
              alt={"icon"}
              style={{
                width: "24px",
                height: "24px",
                marginRight: "10px",
              }}
            />
            Or, text / call {phoneNumber}
            </div>
          </div>
          
        )}

    </div>
  );
};

export default ContactForm;