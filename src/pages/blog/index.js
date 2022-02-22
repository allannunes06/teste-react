import React from "react";
import { Container, ContainerBlog, ContainerImage, ContainerItem, SubTitle, Title, Title2 } from './styles'
import Image1 from '../../assets/images/blog_image_1.svg';
import Image2 from '../../assets/images/bloco_image_2.svg';
import Image3 from '../../assets/images/bloco_image_3.svg';

function Blog() {
    return (
        <Container>
            <ContainerItem>
                <Title>Read Our Blog</Title>
                <SubTitle>Far far away, behind the word mountains,  far from the countries</SubTitle>
                <SubTitle>Vokalia and Consonantia, there live the blind texts.</SubTitle>

                <ContainerBlog>
                    <ContainerImage>
                        <img src={Image1} alt="Quick-start guide to nuts and seeds" />
                        <Title2>Quick-start guide to nuts and seeds</Title2>
                        <SubTitle>Kevin Ibrahim</SubTitle>
                    </ContainerImage>

                    <ContainerImage>
                        <img src={Image2} alt="Nutrition: Tips for Improving Your Health" />
                        <Title2>Nutrition: Tips for Improving Your Health</Title2>
                        <SubTitle>Mike Jackson</SubTitle>
                    </ContainerImage>

                    <ContainerImage>
                        <img src={Image3} alt="The top 10 benefits of eating healthy" />
                        <Title2>The top 10 benefits of eating healthy</Title2>
                        <SubTitle>Bryan McGregor</SubTitle>
                    </ContainerImage>
                </ContainerBlog>
            </ContainerItem>
        </Container>
    )
}

export default Blog