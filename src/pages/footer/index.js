import React from "react";
import { Container, ContainerItem, List, P } from './styles'

function Footer() {
    return (
        <Container>
            <ContainerItem>
                <P>&copy; Copyrights 2019 Stock. All Rights Reserved.</P>
            </ContainerItem>
            <ContainerItem>
                <List>Privacy Policy</List>
                <List>Terms and Conditions</List>
            </ContainerItem>
        </Container>
    )
}

export default Footer