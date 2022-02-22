import React from "react";
import { Container, ContainerItem, Title, Input } from './styles'
import Button from '../../components/button'


function Join() {
    return (
        <Container>
            <ContainerItem>
                <Title>Join our membership to get special offer</Title>
                <Input type="text" placeholder='Enter your email address' />
                <Button>Join</Button>
            </ContainerItem>
        </Container>
    )
}

export default Join