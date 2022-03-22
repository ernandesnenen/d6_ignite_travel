import { Flex,  Icon, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import { IoEllipseSharp } from "react-icons/io5";



interface MyItemListProps{
    text:string,
    align?:string,
    img?:string,
  

}

export function MyItemList({text, img, align='center'}: MyItemListProps){
    const isDesktop = useBreakpointValue({ base: false, md: true })
    return(
        <Flex 
        flexDirection={['row', 'column']}        
        alignItems={['center']}
       justify={[align, 'center']}
       >
           {isDesktop ?
            <Img src={img} w='85px' h='85px' mb='24px' />
            :<Icon as={IoEllipseSharp} mr='8px' w='8px' h='8px' color='Highlight.100' />
            }
            
            <Text 
            fontWeight='500'
            fontSize={['18px']}
            lineHeight={['27px']}
          
            >
               {text}
           </Text>
        </Flex>
        
    )
}