import React, { useState } from 'react';

import './index.scss';

export const ContactForm = () => {
    const [status, setStatus] = useState("Submit");

    const encodeData = (data) => {
        return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
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
            body: encodeData(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form method="post" className="contact-form" name="contactForm" data-netlify="true" onSubmit={handleSubmit} >
            <input type="hidden" name="form-name" value="contactForm" />
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
