import React from "react";
import { Container } from "./styles"

 export default function Header ({black}) {
    return(
        <Container className={black ? 'black' : ''}>
            <>
            <div className="header_logo">
                <a href="#">
                    <img src="https://netflix-clone-one-gamma.vercel.app/_next/static/images/logo-ccbd5398cf84c392e091455a1f9fb4fe.png" alt="Logo Netflix" />
                </a>
            </div>
            
            <div className="header_user">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Logo User"/>
                </a>
            </div>
            </>
        </Container>
    )
}
