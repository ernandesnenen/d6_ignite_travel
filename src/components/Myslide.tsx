import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Text} from '@chakra-ui/react';
import Link from 'next/link';
  
export interface ContinentsProps{
  id: string,
  name:string,
  description: string,
  image: string,
  slug: string
  
}

interface MySlideProps{
  data: ContinentsProps[]
}
 

export function MySlide({data}: MySlideProps){ 
  
    return(
      <Box    
      my={['20px', '52px']}
      mx={['0px', '100px']}
     >
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
     
     {data.map(slide=>(
     
        <SwiperSlide key={slide.id} >
          <Box

          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'          
          bgImage={slide.image}
          bgPosition='center'
          bgRepeat='no-repeat'
          backgroundSize='cover'
          h={['250px', '450px']}
        
          >
           

            <Text
             color='LightText.base'
             fontSize={['24px','48px']}             
             fontWeight='700'
             lineHeight={['36px', '72px']}

             ><Link href={`/continents/${slide.slug}`}>{slide.name}</Link></Text>
            <Text
              color='LightText.dark'
             fontSize={['14px','24px']}             
             fontWeight='700'
             lineHeight={['21px', '36px']}

            >{slide.description}</Text>
         
          </Box>
        </SwiperSlide>
     
     ))}
      </Swiper>
    </Box>
    )
}

