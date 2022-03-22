import { extendTheme} from '@chakra-ui/react'


 export const  theme = extendTheme({
     colors:{
        Highlight:{
            '100':' #FFBA08',
            '50': 'rgba(255, 186, 8, 0.5)',
        },
        LightText:{
            "base":" #F5F8FA",
            "dark":" #DADADA"
        }
       },
     fonts:{
        heading:'Poppins',
        body:'Poppins',
     },
     styles:{
         global:{
             body:{
                 bg:'#F5F8FA',
            }
         }
     }
 })