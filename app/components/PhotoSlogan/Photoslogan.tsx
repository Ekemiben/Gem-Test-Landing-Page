import React from 'react'
import './photoslogan.css'
import Image from "next/image";


const Photoslogan = () => {
  return (
    <>
          
          <div className=' w-[1440px] flex  justify-evenly m-12 sm:flex flex-wrap'>
              {/* <h1>Upper components</h1> */}
              <div className='w-[570px] h-[572px] flex flex-row justify-between'>
                  <div className='w-[100px]'>
                      <button className='w-[100px] h-[48px] bg-slate-100 flex items-center justify-center'><Image src="/up arrow.svg" alt=""  width={30} height={30}/></button>
                      <div className=''>
                          <div className='left-img-one'><Image src="/main-clothe.svg" alt=''  width={100} height={100} /></div>
                          <div className='img-color'>
                              <p className='p-sem-txt'>COLOR</p>
                              <hr></hr>
                              <div className='flex flex-row flex-wrap justify-center'>
                                  <div className="flex flex-col justify-center items-center">
                                  <p className='p-txt'>White</p>
                                      <Image src="/White 2 2.svg" alt='' width={30} height={30} />
                                   </div>   
                                  <div className="flex flex-col justify-center items-center">
                                  <p className='p-txt'>Black</p>
                                      <Image src="/Blackk 3.svg" alt='' width={30} height={30} />
                                   </div>   
                                  <div className="flex flex-col justify-center items-center">
                                  <p className='p-txt'>Blue</p>
                                      <Image src="/blue-clothe-2.svg" alt='' width={30} height={30} />
                                   </div>   
                                  <div className="flex flex-col justify-center items-center">
                                  <p className='p-txt'>Light Blue</p>
                                      <Image src="/Light Blue.svg" alt='' width={30} height={30} />
                                   </div>   
                                  <div className="flex flex-col justify-center items-center">
                                  <p className='p-txt'>Brown</p>
                                      <Image src="/Light Brown.svg" alt='' width={30} height={30} />
                                   </div>     
                              </div>
                          </div>
                          <div className='text-font  bg-slate-100 mt-3'>
                              <p className='p-sem-txt'>TEXT FONT</p>
                              <hr className='border-black w-[80px]  m-auto ' />
                              <ul className='flex  flex-row justify-around w-[100px] mt-1'>
                                  <div className='flex flex-col '>
                                  <li className='font-Montserrat flex flex-row items-center mb-1 '>
                                      <span className='li-span '>
                                          1</span><p className='li-p'>Monserrate</p>
                                  </li>
                                  <li className='font-Audiowide flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          2</span><p className='li-p'>Monserrate</p>
                                  </li>
                                  <li className='font-Londering flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          3</span><p className='li-p'>Monserrate</p>
                                  </li>
                                  <li className='font-Nosifer flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          4</span><p className='li-p'>Nosifer</p>
                                  </li>
                                  {/*  */}
                                  </div>
                                  <div className='flex flex-col'>
                                       <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          5</span><p className='li-p'>Monserrate</p>
                                  </li>
                                  <li className='font-Audiowide flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          6</span><p className='li-p'>Monserrate</p>
                                  </li>
                                   <li className='font-Nosifer flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          7</span><p className='li-p'>Nosifer</p>
                                  </li>
                                   <li className='font-Dancing flex flex-row items-center mb-1'>
                                      <span className='li-span '>
                                          8</span><p className='li-p'>Nosifer</p>
                                  </li>
                                  
                                </div>
                              </ul>
                              <br></br>
                              <p className='p-sem-txt'>TEXT COLOR</p>
                              <hr className='border-black w-[80px]  m-auto ' />
                              <ul className='flex flex-col mt-2'>
                                  <div className='flex flex-row justify-evenly'>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-white rounded-full w-2 h-2 items-center'>
                                    </span><p className='li-p'>white</p>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-black rounded-full w-2 h-2 items-center'>
                                    </span><p className='li-p'>Black</p>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-blue-600 rounded-full w-2 h-2 items-center'>
                                    </span><p className='li-p'>Blue</p>
                                        </li>
                                    </div>
                                  <div className='flex flex-row justify-evenly'>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-amber-200 rounded-full w-2 h-2 items-center'>
                                    </span><p className='li-p'>Gold</p>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-pink-400 rounded-full w-2 h-2 items-center'>
                                    </span><p className='li-p'>Pink</p>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-green-300 rounded-full w-2 h-2 items-center'>
                                    </span><p className='li-p'>Green</p>
                                        </li>
                                    </div>
                                  
                              </ul>
                          </div>
                          <div className='mt-3'>
                              <Image src= "/Half-human.svg" alt='' width={100} height={125} />
                          </div>
                          
                          
                      </div>
                     <button className='w-[100px] h-[48px] bg-slate-100 flex items-center justify-center mt-3'><Image src= "/arrow-chevron-up.svg" alt="" width={30} height={30} /></button>
                      
                  </div>
                  {/* Big clothe */}
                  <div className='bg-slate-100 w-[454px] h-[546px]'>
                      <Image src='/main-clothe-big.svg'alt='' width={500} height={500} />
                  </div>

              </div>
              {/*  */}
              <div className='w-[538px]  border-red-600'>
                  <div className=''>
                      <small className='flex flex-row items-center gap-2'><Image src="/Alert.svg" alt='alrt' height={10} width={10}  /><p className='text-blue-800'>Selling fast! 5 people have this in their carts</p></small>
                  </div>
                  <div className='mt-1'>
                      <h1 className='font-DM_Serif_Display text-4xl leading-10 font-normal '>Personalized Photo and Slogan Text Hoodie</h1>
                  </div>
                  <div className='mt-4 flex flex-row justify-between'>
                      <p className='font-DM_Serif_Display text-4xl'>$39.99<span className='text-slate-400 line-through font-DM_Serif_Display ml-2'>$44.44</span>
                      </p>

                      <Image src="/counter-stock-02.svg" alt='counter stock ' width={100} height={100}/>
                  </div>
                  <div className=' bg-slate-100'>
                      <div className='m-5 p-3'>
                        <div className='flex flex-row  '>
                            <Image src='/Start.svg' alt='start' height={20} width={20} />
                            <Image src='/Start.svg' alt='start' height={20} width={20} />
                            <Image src='/Start.svg' alt='start' height={20} width={20} />
                            <Image src='/Start.svg' alt='start' height={20} width={20} />
                            <Image src='/Start.svg' alt='start' height={20} width={20} />
                        </div>
                        <div className='mt-1'>
                            <p className='text-slate-700'>I love this! When I saw this hoodie, I knew I had to get it. It makes  me so confident every time I wear it. Thanks</p>
                          </div>
                          <span className='text-slate-900 font-sans leading-10 text-xl'> Wendy N.</span>
                      </div>
                  </div>
                  <div className=''>
                          <p className='font-Open_Sans text-base leading-6 font-bold'>Color</p>
                          <ul className='flex flex-row mt-2'>
                                  <div className='flex flex-row justify-evenly  w-60'>
                                    <li className=' flex flex-row items-center mb-1'>
                                      <span className='bg-white rounded-full w-6 h-6 items-center border-2 border-slate-200 justify-center flex'>
                                    <p className='bg-white rounded-full w-4 h-4 items-center border-2 border-slate-200 '></p></span>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-black rounded-full w-6 h-6 items-center'>
                                    </span>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-blue-400 rounded-full w-6 h-6 items-center'>
                                    </span>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-blue-600 rounded-full w-6 h-6 items-center'>
                                    </span>
                                    </li>
                                    <li className='font-Montserrat flex flex-row items-center mb-1'>
                                      <span className='bg-amber-900 rounded-full w-6 h-6 items-center'>
                                    </span>
                                    </li>
                                    
                                    </div>
                                 
                                  
                      </ul>
                      {/* Sizes */}
                      <div className='w-60'>
                        <p className='mt-8 font-Open_Sans text-base font-bold'>Size</p>
                        <div className='flex flex-row mt-2 justify-evenly'>
                          <p className='rounded-3xl border-2 border-solid border-slate-100 p-2 w-[57px] h-[44px] flex justify-center items-center'>S</p>
                          <p className='rounded-3xl border-2 border-solid border-slate-100 p-2 w-[57px] h-[44px] flex justify-center items-center'>M</p>
                          <p className='rounded-3xl border-2 border-solid border-slate-100 p-2 w-[57px] h-[44px] flex justify-center items-center'>L</p>
                          <p className='rounded-3xl border-2 border-solid border-slate-100 p-2 w-[57px] h-[44px] flex justify-center items-center'>XL</p>
                          
                        </div>
                      </div>
                      {/*  */}
                      <div className='mt-10'>
                          <p className='font-Open_Sans text-sm leading-6 font-bold'>Type your custom text</p>
                          <p className='font-Open_Sans leading-6 font-normal text-slate-600 '>Please note the font size and color in parentheses after your text.E.g. My BFF (30, Black)</p>
                          <div className='mt-5'>
                              <input type="text" className="border-2 border-slate-200 h-[61px] w-[535px] p-3 rounded-md" placeholder='My custom huddle' />
                          </div>
                      </div>
                      {/*  */}

                      <br /><br /><br />
                      <br /><br /><br />
                      <div className=''>
                          <p className='font-Open_Sans text-sm leading-6 font-bold'>Perfect to</p>
                          <div className='flex flex-row items-center mt-3 gap-3'>
                              
                              <Image src="/BlueStar.svg" alt='Blue star' height={20} width={20} />
                              <p className='leading-6 font-Open_Sans text-base font-normal text-slate-600'>Dress yourself up</p>
                          </div>
                          <div className='flex flex-row items-center mt-3 gap-3'>
                              
                              <Image src="/ShoppingBag.svg" alt='Blue star' height={20} width={20} />
                              <p className='leading-6 font-Open_Sans text-base font-normal text-slate-600'>Anniversary gifts for your loved one</p>
                          </div>
                          <div className='flex flex-row items-center mt-3 gap-3'>
                              
                              <Image src="/Love.svg" alt='Blue star' height={20} width={20} />
                              <p className='leading-6 font-Open_Sans text-base font-normal text-slate-600'>Birthday or celebration gifts for friends and family</p>
                          </div>
                      </div>
                      {/*  */}
                      <br /><br /><br /><br /><br />
                      <div>
                          <div className='flex flex-row justify-between'>
                              <div className=' flex flex-row items-center justify-evenly border-2 border-gray-200 w-[191px] h-[64px] rounded-md' >
                                  <p className='font-Open_Sans text-2xl cursor-pointer'>-</p>
                                  <p className='font-Open_Sans text-2xl'>1</p>
                                  <p className='font-Open_Sans text-2xl cursor-pointer'>+</p>
                              </div>
                              <button className='bg-blue-900 font-Open_Sans w-[331px] h-[64px] text-white border-none rounded-md'>GET MY HOODIE</button>
                          </div>
                          <br />
                          <div className='mt-5 flex justify-center items-center flex-col '>
                              <p className='font-Open_Sans text-sm leading-6 font-bold'>Guaranteed SAFE Checkout</p>
                              <div className='flex flex-row gap-2 mt-2 cursor-pointer'>
                                  <Image src="/America.svg" alt='America' height={40} width={60} />
                                  <Image src="/Visa.svg" alt='America' height={40} width={60} />
                                  <Image src="/MasterCard.svg" alt='America' height={40} width={60} />
                                  <Image src="/AppleIcon.svg" alt='America' height={40} width={60} />
                                  <Image src="/GoogleIcon.svg" alt='America' height={40} width={60} />
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
              
          </div>
    </>
  )
}

export default Photoslogan
