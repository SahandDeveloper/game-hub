import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <HStack>
        <Image boxSize={'60px'} src={logo}></Image>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar