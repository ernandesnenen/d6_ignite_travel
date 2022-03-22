import { Box, Image, Text } from "@chakra-ui/react"

interface City{
    id: string,
    name: string,
    country: string,
    flag: string,
    image: string,
    continentId: number,
  }
 
  interface CitiesProps{
      cities: City[]
  }

export function Cities({cities}:CitiesProps){
    return(
      
<>
        {cities.map(city => (
                <Box
                border='1px solid'
                borderColor='Highlight.50'
                borderRadius={['4px']}
                key={city.id} 
                w={['256px']}                 
                h={['279px']}
                m={['0px']}                 
                p={['0px']} 
                minWidth='250px'               
                >
                 <Image src={city.image}  w={['256px']} h={['173px']}/>
                 <Box 
                 display='flex'
                 alignItems={['center']}
                 justifyContent='space-around'
                 
                 >
                     <Box
                      mx={['24px']}
                      
                      >
                         <Text
                          fontWeight='600'
                          fontSize={['20px']}
                          lineHeight={['25px']}
                          mt={['18px']}
                          color='#47585B'
                          >{city.name}</Text>
                         <Text
                         fontWeight='500'
                         fontSize={['16px']}
                         lineHeight={['26px']}
                         color='#999'
                         my={['12px']}
                         >{city.country}</Text>
                     </Box>
                     <Image src={city.flag} w={['30px']} h={['30px']}/>
                 </Box>
             </Box> 
        ))}
          
         </>
            )

}