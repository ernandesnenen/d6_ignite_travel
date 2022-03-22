import { Box, Center, Divider, Flex,  Text } from '@chakra-ui/react'


import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { ListTrip } from '../components/Listrip'
import { MySlide } from '../components/Myslide'


import { api } from '../services/api'

interface Continent{
  id: string,
  name: string,
  description: string,
  image:string,
  slug: string
}

interface HomeProps{
  data: Continent[]
}

const Home = ({data}:HomeProps) => {
 
  return (
    <Flex
    h='100%'
    direction='column'  
    >
  
      <Header />
      <Banner />
      <Box as='section'
      mx={["50px", "140px"]}
      my={['36px', "80px"]}    
      >
      <ListTrip />
      </Box>
      <Box display='flex' justifyContent='center'>

          <Center w={['60px', '90px']} >
            <Divider orientation='horizontal'
            border='1px'
            borderColor= '#47585B'
            />
          </Center>
      </Box>
      
      <Box as='section'>
        <Text
        mt={['24px', '52px']}
        align='center'
        fontSize={['20px','36px']}
        fontWeight='500'
        lineHeight={['30px', '54px']}
        color=' #47585B'
        >Vamos nessa? <br/>Então escolha seu continente </Text>     
        <MySlide data={data} />
      </Box>
   </Flex>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await api.get("/continents")
  const data = res.data
  // Pass data to the page via props
  return { props: { data} }
}

export default Home