import React from 'react';

const Contact = () => {
  return(
    <>
     <form>
        <label>

          Name: <br></br>
          <input id='name' type="text" name="name" required />
          <br></br>
          Email Address: <br></br>
          <input id='email' type="text" name="email" required />
          <br></br>
          Message: <br></br>
          <textarea name="message" rows={10} cols={30} required/>
          <br></br>



        </label>

          <input id='formSubmit' type="submit" value="Submit" />
      </form>
    </>
  )

 

}

export default Contact;