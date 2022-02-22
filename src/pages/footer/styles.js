import styled from 'styled-components';
import Colors from '../../assets/colors'


export const Container = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 50%;
`;

export const ContainerItem = styled.div`
        padding: 100px;
        margin-left: 90px;
        display: flex;
        align-items: center;
`;

export const P = styled.p`
    font-weight: 500;
    margin-right: 20px;
    padding-right: 20px;
    color: ${Colors.darkBlue};
`;

export const List = styled.li`
    font-weight: 500;
    margin-right: 30px;
    list-style: none;
    color: ${Colors.grey};
    cursor: pointer;

    &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;