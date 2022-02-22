import styled from 'styled-components';
import Colors from '../../assets/colors';
import BlocoServices from '../../assets/images/bloco_services.svg';


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: no-repeat left url(${BlocoServices});
`;

export const ContainerServices = styled.div`
    width: 420px;
    height: 70%;
    margin: 130px 0 0 800px;
`;

export const Title = styled.h2`
        color: ${Colors.darkBlue};
        padding-bottom: 10px;
        font-size: 32px;
        font-weight: 700;
`;

export const SubTitle = styled.p`
        color: ${Colors.grey};
        padding-bottom: 40px;
        font-size: 16px;
        font-weight:300;
`;

