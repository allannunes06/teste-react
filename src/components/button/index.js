import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyle } from './styles'

function Button({ children, ...rest }) {
  return <ButtonStyle>{children}</ButtonStyle>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}