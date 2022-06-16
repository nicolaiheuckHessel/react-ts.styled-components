import React from 'react'
import { AnimatedLogoProps } from './AnimatedLogo.props'
import { StyledAppLogo } from './AnimatedLogo.styled'

const AnimatedLogo = (props: AnimatedLogoProps) => {
  return (
    // <img src="logo192.png" alt='logo' className='App-logo'></img>
    <StyledAppLogo src="logo192.png"></StyledAppLogo>
  )
}

export default AnimatedLogo