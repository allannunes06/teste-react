import React from 'react';
import { Container, HeaderContainer, HeaderNav, TitleHeader, Menu, MenuList, ContainerItem, TitleContainerItem, InputItem, Input} from './styles';
import ButtonRegister from '../../components/buttonRegister';
import Button from '../../components/button';
import { Link } from 'react-router-dom';


function Header({ navigation }) {

    return (
        <Container>
            <HeaderContainer>
                <HeaderNav>
                    <TitleHeader>Healthy Food</TitleHeader>
                    <Menu>
                        <MenuList>HEALTHY RECIPES</MenuList>
                        <MenuList>BLOG</MenuList>
                        <MenuList>JOIN</MenuList>
                        <Link to="/register">
                            <ButtonRegister
                                type="submit"
                            />
                        </Link>
                    </Menu>
                </HeaderNav>
                <ContainerItem>
                    <TitleContainerItem>Ready for Trying a new recipe?</TitleContainerItem>
                    <InputItem>
                        <Input type="text" placeholder="Search healthy recipes" />
                        <Button>🔍</Button>
                    </InputItem>
                </ContainerItem>
            </HeaderContainer>
        </Container >
    );
};

export default Header;
