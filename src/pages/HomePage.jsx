import React from "react"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center align-center gap-10 h-[10svh] py-[10px]">
                <div>Home Page</div>
                <Link to='/About'>About Page</Link>
                <Link to='/Contact-Us'>Contact Us Page</Link>
            </div>
            <div className="flex flex-row justify-center align-center h-[90svh] w-[100svw]">
                <p className="w-[40svw] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nulla maiores cumque numquam est reiciendis aperiam fugiat unde sint quod illo voluptas veritatis optio porro, tempora ipsa? Repellendus, molestias quis!</p>
            </div>
        </div>
    )
}

export default HomePage