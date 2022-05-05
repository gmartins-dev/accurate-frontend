import React from "react";
import { Container } from "./styles"

 export default function Header ({black}) {
    return(
        <Container className={black ? 'black' : ''}>
            <>
            <div className="header_logo">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" />
                </a>
            </div>
            
            <div className="header_user">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
            </>
        </Container>
    )
}
