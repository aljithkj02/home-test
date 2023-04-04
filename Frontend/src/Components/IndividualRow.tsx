import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { HomeData } from '../types'

interface IIndividualData extends HomeData {
    _id: string
}

const IndividualRow = (prop: IIndividualData) => {
    const { name, email, place, no_of_travellers, budget } = prop;
    return (
        <Tr>
            <Td textAlign="center">{name}</Td>
            <Td textAlign="center">{email}</Td>
            <Td textAlign="center">{place}</Td>
            <Td textAlign="center">{no_of_travellers}</Td>
            <Td textAlign="center">${budget}</Td>
            <Td textAlign="center">${no_of_travellers * budget}</Td>
        </Tr>
    )
}

export default IndividualRow
