import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

function ButtonRegister({ children, ...rest }) {
  return <Button{...rest}>REGISTER</Button>
}

export default ButtonRegister

ButtonRegister.propTypes = {
  children: PropTypes.string
}
