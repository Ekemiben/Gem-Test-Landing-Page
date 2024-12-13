import Image from "next/image"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Teeslovers = () => {
    return (
      <>
      <div className='flex flex-col items-center justify-center mt-12 h-[837px] w-[1440px] bg-white  border-2 border-green-600'>
          <div className=" flex flex-col items-center justify-center ">
              <p className="font-DM_Serif_Display items-center text-4xl leading-10 font-normal">From Our Hoodie & Tees Lovers</p>
              <p>What customers have been saying!</p>
          </div>
          
                <div className="flex flex-col w-[1170px] h-[551px] items-center justify-center bg-slate-100 mt-12">
                <div className="w-[1030px] h-[327px] flex flex-row justify-around  border-cyan-600">
                    <div className="w-[60%]  ">
                        <div className="flex flex-row items-center">
                            <Image src="/_Avatar Image.svg" alt="small potraite" height={70} width={70} />
                            <div className="flex flex-col items-start ml-5 gap-1 w-[306px] h-[70px]  border-yellow-500">
                                <p className="font-Open_Sans leading-6 text-base font-bold">Heather Watson</p>
                                <div className="flex flex-row ">
                                    <Image src="/Start.svg" alt="Start" height={20} width={20} />
                                    <Image src="/Start.svg" alt="Start" height={20} width={20} />
                                    <Image src="/Start.svg" alt="Start" height={20} width={20} />
                                    <Image src="/Start.svg" alt="Start" height={20} width={20} />
                                    <Image src="/Start.svg" alt="Start" height={20} width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-Open_Sans font-bold leading-6 text-base mt-5'>I got one for myself and one for my daughter, they’re so stinking adorable. </p>
                            <p className='font-Open_Sans leading-normal text-base text-slate-600 mt-2'>Such a cute way to match my baby when it gets cold again. The hoodies are true to size, I ordered a youth medium and it fits PERFECTLY! Overall, 100% satisfied and will definitely order again.</p>
                            </div>
                            <div className="mt-8">
                                <p>Purchased Item:</p>
                                <div className="flex flex-row">
                                    <Image src="/Cart-Item.svg" alt="Purchase Item" width={70} height={70} />
                                    <div className="flex flex-col">
                                        <p className="line-clamp-5">Personalized Photo and Slogan Text Hoodie</p>
                                        <div className="flex flex-row"><p className="font-Open_Sans
                                        ">$39.99 </p> <span className="ml-4 text-slate-400 line-through">$44.44</span></div>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/*  */}
                    <div className="flex w-[35%]">
                            <Image src="/Product Image.svg" alt="Potraite" height={320} width={320} />
                        
                        </div> 
                      
                    </div>
                    <div className=" flex flex-row justify-around w-[120px] h-[48px]">
                        <p className="rounded-full text-4xl border-2 border-slate-200 w-[50px] p-2 flex"><WestOutlinedIcon /></p> 
                       <p className="rounded-full text-4xl border-2 border-slate-200 w-[50px] p-2 flex"><EastOutlinedIcon /></p> 
                       
                    </div> 
                    
                
                
                </div>
                
            </div>
    </>
  )
}

export default Teeslovers