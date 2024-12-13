"use client"
import React, { useState } from 'react';
import { Box } from '@mui/material';

import Tab from '@mui/material/Tab';
import { TabContext, TabList } from '@mui/lab'; // Corrected import from @mui/lab
import Image from 'next/image';

const Overview = () => {
  const [value, setValue] = useState<string>('1'); // Track selected tab

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // Update the selected tab value
  };

  return (
    <>
      <div className='  w-[1440px] h-[566px] flex flex-col items-center justify-center border-b-stone-950'>
      <div className=' m-12 w-[1170px] h-[46px]'>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="OVERVIEW" value="1" />
          <Tab label="SIZING" value="2" />
          <Tab label="PACKAGING" value="3" />
          <Tab label="SHIPPING AND FREE RETURNS" value="3" />
        </TabList>
      </Box>
      {/* <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
        </div>
        {/*  */}
        <div className='flex flex-row w-[1170px] h-[344px] justify-around'>
            <div className='w-[50%] '>
            <p className='font-Open_Sans font-bold leading-6 text-base'>Overview</p>
            <p className='font-Open_Sans leading-normal text-base mt-1 mb-2 text-slate-600'>One of our most popular t-shirts for direct-to-garment printing.</p>
            <p className='font-Open_Sans leading-normal text-base text-slate-600'>It’s eco-friendly, unisex, and available in plenty of colour options. And it’s manufactured not only to high quality standards but with garment decoration in mind. It’s made for DTG, made for embroidery. There’s a reason why countless online clothing brands use it as their staple hoodie! Find yours below.
            </p>
            <ul className='list-disc list-inside mt-3'>
              <li className='font-Open_Sans leading-normal text-base text-slate-600'>Unisex style, medium fit. It’s for everyone.</li>
              <li className='font-Open_Sans leading-normal text-base text-slate-600'>Round drawcords in matching body color.</li>
              <li className='font-Open_Sans leading-normal text-base text-slate-600'>1x1 rib at sleeve hem and bottom hem.</li>
              <li className='font-Open_Sans leading-normal text-base text-slate-600'>Flatlock topstitch on all seams.</li>
              <li className='font-Open_Sans leading-normal text-base text-slate-600'>Kangaroo pocket with flatlock topstitch.</li>
            </ul>
            </div>
            {/*  */}
            <div className='w-[20%]'>
            <p className='font-Open_Sans font-bold leading-6 text-base'>Material</p>
              <ul className='list-disc list-inside mt-3'>
              <li className='font-Open_Sans leading-normal text-base text-slate-600 justify-self-stretch'>85% Organic ring-spun Combed Cotton</li>
              <li className='font-Open_Sans leading-normal text-base text-slate-600'>15% Recycled Polyester.</li>
            </ul>
            <ul className='list-disc list-inside mt-3'>
              <p className='font-Open_Sans font-bold leading-6 text-base'>Weight</p>
              <li className='font-Open_Sans leading-normal text-base text-slate-600 justify-center'>270 gsm.</li>
              
            </ul>
            </div>
            <div className='w-[20%]'>
            <p className='font-Open_Sans font-bold leading-6 text-base'>Color Information</p>
            <p className='font-Open_Sans leading-normal text-base text-slate-600 justify-center'>Color repre­­sen­­ta­­tion is only as accurate as the web design process allows.</p>
            </div>
        </div>
        <br />
        {/*  */}
        <div className='h-[344px] w-[1440px] m-12 bg-slate-100 flex flex-row justify-evenly items-center '>
          <div className='w-[200px] h-[270px] flex flex-col justify-center items-center '>
            <Image src="/diamond.svg" alt="" width={70} height={70} />
            
            <p className='font-Open_Sans font-bold leading-6 text-base text-justify mt-3'>Premium Quality</p>
            <p className=' flex items-center leading-6 font-Open_Sans font-normal text-center p-2'>Prints that last a long time. At GemCustom, we take product quality very seriously.</p>

          </div>
          <div className='w-[200px] h-[270px] flex flex-col justify-center items-center '>
            <Image src="/Shipping.svg" alt="" width={70} height={70} />
            
            <p className='font-Open_Sans font-bold leading-6 text-base text-justify mt-3'>Free Delivery</p>
            <p className=' flex items-center leading-6 font-Open_Sans font-normal text-center p-2'>Spend from $50 to get free shipping worldwide with 24/7 order tracking.</p>

          </div>
          <div className='w-[200px] h-[270px] flex flex-col justify-center items-center '>
            <Image src="/Easy-Return.svg" alt="" width={70} height={70} />
            
            <p className='font-Open_Sans font-bold leading-6 text-base text-justify mt-3'>Easy Return</p>
            <p className=' flex items-center leading-6 font-Open_Sans font-normal text-center p-2'>If you’re not happy with the order, ship it back to us for an exchange - no extra cost.</p>

          </div>
          <div className='w-[200px] h-[270px] flex flex-col justify-center items-center '>
            <Image src="/Green-Package.svg" alt="" width={70} height={70} />
            
            <p className='font-Open_Sans font-bold leading-6 text-base text-justify mt-3'>Green Packaging</p>
            <p className=' flex items-center leading-6 font-Open_Sans font-normal text-center p-2'>We care about our Planet, so your order will come plastic-free, recyclable & reusable!</p>

          </div>
        </div>
        </div>
      </>
  );
};

export default Overview;
