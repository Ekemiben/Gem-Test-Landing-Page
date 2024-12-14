import Image from "next/image"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
const Nextone = () => {
  return (
      <>
          <div className="w-[1440px] h-[653px] flex flex-col justify-center items-center">
              <div className=" flex flex-col items-center ">
              <div className="flex flex-col justify-center items-center  w-[830px] h-[86px]">
                   <p className="font-DM_Serif_Display items-center text-4xl leading-10 font-normal justify-center">You Should Be The Next One Here!</p>
              <p className="font-Open_Sans text-2xl">Follow us at <span className="font-bold">@GemCustom</span>  and use the hashtag <span className="font-bold">#GemCustom</span> to be featured</p>
              </div>
          <div className="w-[1172px] h-[367px] flex flex-col justify-center items-center mt-6 ">
            <div className="flex flex-row justify-around gap-2">
              <Image src="/Next-one-img.svg" alt="Next-Image" width={285} height={287}/>
              <Image src="/Next-one-two.svg" alt="Next-Image" width={285} height={287}/>
              <Image src="/Next-one-three.svg" alt="Next-Image" width={285} height={287}/>
              <Image src="/Next-one-four.svg" alt="Next-Image" width={287} height={287}/>
            </div>
                  <div className=" flex flex-row justify-around  w-[120px] h-[48px] mt-5">
                        <p className="rounded-full text-4xl border-2 border-slate-200 w-[50px] p-2 flex cursor-pointer"><WestOutlinedIcon /></p> 
                       <p className="rounded-full text-4xl border-2 border-slate-200 w-[50px] p-2 flex cursor-pointer"><EastOutlinedIcon /></p> 
                       
                    </div> 
              </div>
                  </div>
          </div>
    </>
  )
}

export default Nextone