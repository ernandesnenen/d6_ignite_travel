import { Flex, Image} from "@chakra-ui/react";
import Link from "next/link";
// import logo from '../../public/logo.svg'

export  function Header(){
    return (
        <Flex 
        width='100%'
        justify='center'
        align='center'
        bg='#F5F8FA'
        h={['50px', '100px']}
        m='0'
        >
            <Link href='/'>
               <Image src='/logo.svg' alt="logo" h={['20px', '45px']}  cursor='pointer'/>  
            </Link>

            
        </Flex>
    )
}