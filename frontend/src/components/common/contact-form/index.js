import React, { useState } from 'react';

import './index.scss';

export const ContactForm = () => {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { firstname, lastname, email, message } = e.target.elements;
        let details = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch(window.location.href + "contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form className="contact-form" name="contact-form" data-netlify="true" onSubmit={handleSubmit} >
            <div>
                <label htmlFor="firstname">First Name<span>*</span></label>
                <input type="text" id="firstname" required />
            </div>
            <div>
                <label htmlFor="lastname">Last Name<span>*</span></label>
                <input type="text" id="lastname" required />
            </div>
            <div>
                <label htmlFor="email">Email<span>*</span></label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message<span>*</span></label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
}
