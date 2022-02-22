import styled from 'styled-components'
import Colors from '../../assets/colors'


export const Container = styled.div`
background-color: ${Colors.back};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerItens = styled.div`
background-color: ${Colors.green};
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: ${Colors.darkBlue};
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        font-weight: 700;
        color: ${Colors.darkBlue};
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
`
