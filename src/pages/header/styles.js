import styled from 'styled-components';
import Illustration from '../../assets/images/Illustration.svg';
import Colors from '../../assets/colors'

export const Container = styled.header`
    background-color: ${Colors.white};
    width: 100vw;
    height: 100vh;
`;

export const HeaderContainer = styled.section`
    background: no-repeat right url(${Illustration});
    height: 100%;
`;

export const HeaderNav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-self: start;
        align-items: center;
        width: 100%;
        height: 10%;
`;

export const TitleHeader = styled.h1`
        margin-left: 130px;
        align-self: center;;
        font-size: 32px;
        font-weight: bold;
        color: ${Colors.green};
`;

export const Menu = styled.ul`
        padding: 0 130px;
        display: flex;
        align-items: center;
        list-style: none;
        color: ${Colors.white};
`;

export const MenuList = styled.li`
    padding-left: 30px;
    font-weight: 500;
    color: ${Colors.white};
    cursor: pointer;

    &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ContainerItem = styled.div`
        margin-left: 100px;
        margin-top: 200px;
        width: 25%;
        height: 40% ;
`;

export const TitleContainerItem = styled.h1`
        font-size: 48px;
        font-weight: bold;
        color: ${Colors.darkBlue};
`;

export const InputItem = styled.div`
        display: flex;
        justify-content: start;
        padding-top: 40px;
`;

export const Input = styled.input`
        font-size: 16px;
        font-weight: 400;
        color: ${Colors.darkBlue};
        border:1px solid  ${Colors.darkBlue};
        border-radius: 5px;
        width: 280px;
        height: 50px;
        margin-right: 15px;
        padding: 20px;
`;

export const ButtonSearch = styled.button`
        width: 80px;
        height: 80px;
        border-radius: 5px;
        border: none;
        background-color:${Colors.green};
`;


