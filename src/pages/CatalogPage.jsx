import { Container, Flex, Spinner } from '@chakra-ui/react'
import Header from "../components/Header/Header"
import ChakraCard from '../components/Cards/ChakraCard'
import { useEffect, useState } from 'react'
import { catalogCards } from '../data'

const CatalogPage = () => {

    const [cards, setCards] = useState([])

    const [sendRequest, setSendRequest] = useState(false)

    useEffect(() => {
        if (!sendRequest){

            setCards(catalogCards)

            setSendRequest(true)
        }
    }, [sendRequest, setSendRequest, setCards])

    const cardsItems = cards.map( (card) => (
        <ChakraCard key={card.id} data={card}/>
    ))

    if (cards.length === 0) {
        return (
            <>
            <Header/>
            
            <Container maxW='lg'>
                <Flex
                    flexDirection='column'
                    gap='20px'
                > 
                    <Spinner size='xl' color='teal'/>
                    </Flex>
            </Container>
        </>
        )
    }

    return (
        <>
            <Header/>
            
            <Container maxW='lg'>
                <Flex
                    flexDirection='column'
                    gap='20px'
                > 
                    {cardsItems}
                </Flex>
            </Container>
        </>
    )
}

export default CatalogPage