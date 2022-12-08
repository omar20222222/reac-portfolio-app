import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      setErrorMessage("");
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    console.log("errorMessage", errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="my-2">
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="my-2">
          <div>
            <label htmlFor="email">Email address:</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="my-2">
          <div>
            <label htmlFor="message">Message:</label>
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="buttontag" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//       <p></p>
//     </div>
//   );
// }
