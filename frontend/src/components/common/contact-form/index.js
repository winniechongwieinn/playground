import React, { useState } from 'react';

import './index.scss';

export const ContactForm = () => {
    const [status, setStatus] = useState("Submit");

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

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
        let response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({ "form-name": "contact", ...details }),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstname">First Name<span>*</span></label>
                <input type="text" id="firstname" name="firstname" required />
            </div>
            <div>
                <label htmlFor="lastname">Last Name<span>*</span></label>
                <input type="text" id="lastname" name="lastname" required />
            </div>
            <div>
                <label htmlFor="email">Email<span>*</span></label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="message">Message<span>*</span></label>
                <textarea id="message" name="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
}
