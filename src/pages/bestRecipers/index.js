import React from "react";
import Button from '../../components/button'
import {Container, ContainerItem, ContainerRecipes, ContainerTitle, SubTitle, Title, Recipes, TitleRecipes} from './styles'
import Comida1 from '../../assets/images/comida_1.svg';
import Comida2 from '../../assets/images/comida_2.svg';
import Comida3 from '../../assets/images/comida_3.svg';
import Comida4 from '../../assets/images/comida_4.svg';

function BestRecipers(){
    return(
        <Container>
       <ContainerItem>
                <ContainerTitle>
                    <Title>Our Best Recipes</Title>
                    <SubTitle>
                        Far far away, behind the word mountains,  far from the countries<br />
                        Vokalia and Consonantia, there live the blind texts.
                    </SubTitle>
                </ContainerTitle>
                <ContainerRecipes>
                    <img src={Comida1} alt="Broccoli Salad with Bacon" />
                    <Recipes>
                        <TitleRecipes>Broccoli Salad with Bacon</TitleRecipes>
                        <Button>See Recipe</Button>
                    </Recipes>
                </ContainerRecipes>
                <ContainerRecipes>
                    <img src={Comida2} alt="Classic Beef Burgers" />
                    <Recipes>
                        <TitleRecipes>Classic Beef Burgers</TitleRecipes>
                        <Button>See Recipe</Button>
                    </Recipes>
                </ContainerRecipes>
                <ContainerRecipes>
                    <img src={Comida3} alt="Classic Potato Salad" />
                    <Recipes>
                        <TitleRecipes>Classic Potato Salad</TitleRecipes>
                        <Button>See Recipe</Button>
                    </Recipes>
                </ContainerRecipes>
                <ContainerRecipes>
                    <img src={Comida4} alt="Cherry Cobbler on the Grill" />
                    <Recipes>
                        <TitleRecipes>Cherry Cobbler on the Grill</TitleRecipes>
                        <Button>See Recipe</Button>
                    </Recipes>
                </ContainerRecipes>
            </ContainerItem>
       </Container>

    )
}

export default BestRecipers