import React from 'react';

export function ContactPage(){
    return (
        <>
        <div className='contact_Bg'>
        <div className="container shadow">
            <h1>Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p><strong>Address:</strong> 34 Main Street, Bangalore, India</p>
                        <p><strong>Phone:</strong> +91 123 456-7890</p>
                        <p><strong>Email:</strong> floppy@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

