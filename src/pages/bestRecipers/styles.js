import styled from 'styled-components';
import Colors from '../../assets/colors'


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;


export const ContainerItem = styled.div`
    background-color: ${Colors.back};
    align-items: center; 
    margin-left: 200px;
`;

export const ContainerTitle = styled.div`
        width: 100%;
        text-align: center;
        padding-bottom: 20px;
        padding-top: 40px;
`;

export const Title = styled.h2`
        color: ${Colors.darkBlue};
        padding-bottom: 10px;
        font-size: 28px;
        font-weight: 700;
`;

export const SubTitle = styled.p`
        color: ${Colors.grey};
        padding-bottom: 10px;
        font-size: 16px;
        font-weight:500;
`;

export const ContainerRecipes = styled.div`
        display: inline-flex;
        width: 50%;
        margin-bottom: 20px;
        background-color: ${Colors.white};
        align-items: center;
        box-shadow: 2px 4px 4px ${Colors.grey} ;
`;

export const Recipes = styled.div`
        padding: 0 20px 0 20px;
`;

export const TitleRecipes = styled.h3`
        color: ${Colors.darkBlue};
        padding-bottom: 10px;
        font-size: 26px;
        font-weight: 700;
        width: 230px;
`;
