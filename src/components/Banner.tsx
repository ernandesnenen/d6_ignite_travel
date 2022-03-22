import { Box, Flex,  Img,  Text} from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react' 



export  function Banner(){
const isWidthLage = useBreakpointValue({
    base:false,
    lg:true
})
   
    return (
        <Flex        
        bgImage='Background_lg.png'
        h={['163px','335px']}
       
        >   
            <Box
            position='absolute'
            mt={['28px','80px']}
            ml={['16px','140px']}
            mb={['77px','145px']}
            
            >
                <Text
                w={['238px','426px']}
                fontSize={['20px', '36px']}
                lineHeight={['30px' , '54px']}
                fontWeight='500'
                color='LightText.base'
                >
                    5 Continentes, <br/>infinitas possibilidades.
                </Text>
                <Text
                w={['333px', '524px']}
                 fontSize={['14px','20px']}
                 lineHeight={['21px', '30px']}
                 fontWeight='400'
                color='LightText.dark'
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Box>
            {isWidthLage && (
            <Box
            position='absolute'
            mt='116px'
            mr='140px'
            ml='869px'           
            >
               <Img src="Airplane.svg" w='417.15px'  h='270.74px'/>
            </Box>       
            )}
        </Flex>
    )
}