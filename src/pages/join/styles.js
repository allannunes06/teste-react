import styled from 'styled-components';
import Colors from '../../assets/colors';
import Bloco from '../../assets/images/bloco_final_image.svg';


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: no-repeat right url(${Bloco});
`;

export const ContainerItem = styled.div`
    width: 30%;
    height: 70%;
    margin: 300px 0 0 200px;
`;

export const Title = styled.h2`
        color: ${Colors.darkBlue};
        padding-bottom: 10px;
        font-size: 36px;
        font-weight: 700;
`;

export const Input = styled.input`
        font-size: 16px;
        font-weight: 400;
        color: ${Colors.darkBlue};
        border:1px solid  ${Colors.grey};
        border-radius: 5px;
        width: 250px;
        height: 50px;
        margin-right: 15px;
        padding: 20px;
`;