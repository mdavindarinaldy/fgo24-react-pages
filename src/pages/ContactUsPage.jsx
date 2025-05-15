import React from "react"
import { Link } from "react-router-dom"

function ContactUsPage() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center align-center gap-10 h-[10svh] py-[10px]">
                <Link to='/'>Home Page</Link>
                <Link to='/About'>About Page</Link>
                <div>Contact Us Page</div>
            </div>
            <div className="flex flex-row justify-center align-center h-[90svh] w-[100svw]">
                <input type='email' className="bg-white w-[40svw] h-[20px] text-black"/>
            </div>
        </div>
    )
}

export default ContactUsPage