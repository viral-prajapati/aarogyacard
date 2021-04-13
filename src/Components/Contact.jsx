import React, { Component } from 'react';
import "./Contact.css"


const Contact = () => {
    return (
        <>
            {/* <!--Section: Contact v.2--> */}
            <section class="contact" id="contact">

                {/* <!--Section heading--> */}
                <h1 class="h1-responsive text-center my-4">Contact us</h1>

                <div class="row my-contact">

                    {/* <!--Grid column--> */}
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="#" method="POST">

                            {/* <!--Grid row--> */}
                            <div class="row">

                                {/* <!--Grid column--> */}
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" />
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control" />
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" />
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div class="row">

                                {/* <!--Grid column--> */}
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                        </form>

                        <div class="text-center text-md-left ">
                            <a class="btn btn-primary contact-btn" onclick="document.getElementById('contact-form').submit();" style={{border: "2px solid #4a5978 !important"}}>Submit</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>

            </section>          
        </>
    );
}

export default Contact;