import React, { useEffect } from "react"
import Container from "./container"

function Page(props) {
    useEffect(() => {
        document.title = `${props.title} | ComplexApp`
        window.scrollTo(0, 0)
    }, [props.title])
    return (
        <Container width={props.width}>
            {props.children}
        </Container>
    )
}

export default Page