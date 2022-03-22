import { Box,
     Flex,
     Text,
     Image, 
     Popover, 
     PopoverTrigger, 
     Button, 
     PopoverContent, 
     PopoverArrow, 
     PopoverCloseButton, 
     PopoverHeader, 
     PopoverBody, 
     Icon, 
     SimpleGrid} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Cities } from "../../components/Cities";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface City{
  id: string,
  name: string,
  country: string,
  flag: string,
  image: string,
  continentId: number,
}

interface Continent{
  id: number,
  name: string,
  description: string,
  full_description:string,
  slug:string,
  link: string,
  image:string,
  countries:number,
  cities: number,
  languages: number,
  info: string
}

interface  ContinentProps{
  continent: Continent,
  cities: City[]
}

    export default function Continent({continent, cities}: ContinentProps){

       return(
            <>
           <Header/>
           <Flex
           justifyContent={['center', 'flex-start']}
           alignItems={['center', 'flex-end']} 
           h={['150px','650px']}
           w={['375px','100%']}
           bgImage={`/continenteCapa/${continent.slug}.jpg`}
           bgSize='cover'
           bgRepeat='no-repeat'
           bgPosition='center' 
         
           >
               <Text
               fontWeight='600'
               fontSize={['28px', '48px']}
               lineHeight={['42px','72px']}
               color='LightText.base'
               mx={['140px']}
               my={['59px']}
               align={['center', 'left']}
               >{continent.name}</Text>
           </Flex>
           <Flex
           flexDirection={['column','row']} as='section'
           justifyContent={['center','space-between']}
           alignItems={['center']}
           m={['16px','140px']} 
          
         
           >
              <Box
              maxWidth={['600px']}              >

                <Text               
                align='justify'
                fontWeight='400'
                fontSize={['14px','24px']}
                lineHeight={['21px','36px']}
                color='#47585B'
                
                >{continent.full_description}</Text>
              </Box>
              <Box
                display='flex'
                justifyContent='space-between'
                w={['330px','490px']}
                ml={['0px', '70px']}
               
                           
                >
                      <Box>
                          <Text
                          fontWeight='600'
                          fontSize={['24px','48px']}
                          lineHeight={['36px', '72px']}
                          color='Highlight.100'
                          >{continent.countries}</Text>
                          <Text
                          fontWeight='400'
                          fontSize={['18px', '24px']}
                          lineHeight={['27px','36px']}
                          color='#47585B'
                          >Países</Text>
                      </Box>
                      <Box>
                          <Text
                          fontWeight='600'
                          fontSize={['24px','48px']}
                          lineHeight={['36px','72px']}
                          color='Highlight.100'
                          >{continent.languages}</Text>
                          <Text
                          fontWeight='400'
                          fontSize={['18px','24px']}
                          lineHeight={['27px','36px']}
                          color='#47585B'
                          >Línguas</Text>
                      </Box>
                      <Box >
                          <Text
                          fontWeight='600'
                          fontSize={['24px', '48px']}
                          lineHeight={['36px','72px']}
                          color='Highlight.100'
                          >{continent.cities}</Text>
                          <Text
                          fontWeight='400'
                          fontSize={['18px','24px']}
                          lineHeight={['27px', '36px']}
                          color='#47585B'
                          >Cidades + 100
                          <Popover >
                          <PopoverTrigger>
                            <Button
                            bg='none'
                            border='none'
                            p='0'
                            h='8px'
                            minWidth='0'
                            ml={['4px']}
                            
                            
                            ><Icon  as={IoIosInformationCircleOutline}/></Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Cidades</PopoverHeader>
                            <PopoverBody>{continent.info}</PopoverBody>
                          </PopoverContent>
                        </Popover></Text>
                  </Box>
              </Box>
           </Flex>
           <Box as='section'my={['32px']}
            mx={['16px', '140px']}>
               <Text
               fontWeight='600'
               fontSize={['24px']}
               lineHeight={['36px']}
               color='#47585B'
               my={['16px']}
               >
                Cidades + 100
               </Text>

              

              <SimpleGrid  
               columns={[1, 4]} 
               spacing={['16px', '20px']}
               mx={['44px', '0px']}
                        
                       
              >             
                <Cities  cities={cities}/>
                  
              </SimpleGrid> 
           </Box>
           </>
        )
    }

    // ---------------------------------------------------------------
    export const getStaticPaths: GetStaticPaths = async () => {
        return {
          paths: [],
          fallback: 'blocking',
        };
      };
      
      export const getStaticProps: GetStaticProps = async ({params}) => {

          const  { slug }  = params;            
          
          const {data}  = await api.get(`/continents`);         
          const continent =  data.filter(cont =>  cont.slug === slug  )

          const res = await api.get(`/cities`);         
          const  cities =  res.data.filter(city =>  city.continentId === continent[0].id  )
         
        return {
          props: {
            continent: continent[0],
            cities: cities
          },
          revalidate: 60 * 60 * 24, // 24 hours
        };
      };