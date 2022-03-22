
import { Grid, GridItem, Text} from '@chakra-ui/react'
 
import { MyItemList } from './MyItemLisy';

export function ListTrip(){
  
    return(

      <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      h="120px"
      maxW="1160px"
      gap={[1, 5]}
    >    
    <GridItem > 
      <MyItemList text='vida noturna'  align='start' img='cocktail.svg'/>      
    </GridItem>
    <GridItem>
      <MyItemList text='Praia' align='end'  img='surf.svg'/>
    </GridItem>
    <GridItem>
      <MyItemList text='Moderno'  align='start'  img='building.svg'/>
    </GridItem>
    <GridItem>
      <MyItemList text='Classico'  align='end'  img='museum.svg'/>
    </GridItem>
    <GridItem colSpan={[2, 1]}>
      <MyItemList text='E mais...'   img='earth.svg'/>
    </GridItem>
    </Grid>
    )
}