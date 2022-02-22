import styled from 'styled-components'
import colors from '../../assets/colors'

export const Button = styled.button`
  width: 140px;
  height: 45px;
  margin-left: 20px;
  background: ${colors.white};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: ${colors.green};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`