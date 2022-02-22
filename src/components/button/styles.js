import styled from 'styled-components'
import colors from '../../assets/colors'

export const ButtonStyle = styled.button`
  width: 100px;
  height: 50px;
  background: ${colors.green};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: ${colors.white};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`