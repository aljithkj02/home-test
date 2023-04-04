import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Flex bgColor="black" p="1rem 2rem" justifyContent="space-around">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/submissions">Submissions</NavLink>
            </Flex>
        </nav>
    )
}

export default Navbar
