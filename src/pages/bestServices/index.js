import React from "react";
import { Container, ContainerServices, SubTitle, Title } from './styles';
import Button from "../../components/button";


function BestServices() {
    return (
        <Container>
            <ContainerServices>
                <Title>
                    The best services ready To serve you
                </Title>
                <SubTitle>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</SubTitle>
                <SubTitle>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</SubTitle>
                <SubTitle>A small river named Duden flows by their place and supplies it with the necessary regelialia.</SubTitle>
                <Button>Know More</Button>
            </ContainerServices>
        </Container>
    )
}

export default BestServices