import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text,  } from "@chakra-ui/react"

const ChakraCard = (props) => {

    const data = props.data

    return (
        <Card maxW='sm'
            background='teal.400'
        >
  <CardBody>
    <Image
      src={data.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data.title}</Heading>
      <Text>
        {data.text}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       {data.cost}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}

export default ChakraCard