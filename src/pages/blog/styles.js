import styled from 'styled-components';
import Colors from '../../assets/colors'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ContainerItem = styled.div`
    background-color: ${Colors.back};
    padding: 35px 0 35px 0;
    justify-content: center;
    flex-direction: row;
`;

export const Title = styled.h2`
        color: ${Colors.darkBlue};
        text-align: center;
        padding-bottom: 20px;
        font-size: 32px;
        font-weight: 700;
`;

export const SubTitle = styled.p`
        color: ${Colors.grey};
        text-align: center;
        padding-bottom: 10px;
        font-size: 16px;
        font-weight:400;
`;

export const ContainerBlog = styled.div`
    flex-direction: row;
    display: flex;
    text-align: center;
`;

export const ContainerImage = styled.div`
        width: 400px;
`;

export const Title2 = styled.h2`
        color: ${Colors.darkBlue};
        text-align: center;
        padding:20px;
        font-size: 28px;
        font-weight: 700;
`;