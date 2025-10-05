import React from 'react'
import { assets } from '../assets/assets'
import{motion} from 'framer-motion'
const About = () => {
  return (
   <motion.div
  initial={{ opacity: 0, x: 200 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: false, amount: 0.2 }}  // important change
  className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:32 w-full overflow-hidden"
  id="About"
>
   <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About<span className='underline underline-offset-1 decoration-1 under font-light'>Our Brand</span></h1>
   <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Propertties,Dedicated to Your Vision</p>
   <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
  <img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg'/>
   <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
     <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
        <div>
            <p className='text-4xl font-medium text-gray-800'>14+</p>
            <p>Years of Excellence</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>16+</p>
            <p>Projected Completed</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>20+</p>
            <p>Mn. Sq. Ft. Delivered</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>32+</p>
            <p>Ongoing Project</p>
        </div>
     </div>

     <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non pariatur at maxime eos placeat ad reprehenderit id sequi natus, quo cum nihil optio minus animi a quisquam! Iure, culpa magnam!Lorem
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestiae quo neque error, facere aspernatur voluptatum ut veniam, ducimus tempora quibusdam! Vel voluptas maxime ipsam ullam, fugit voluptate? Est, culpa?
     </p>
     <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
   </div>
   </div>
    </motion.div>
  )
}

export default About