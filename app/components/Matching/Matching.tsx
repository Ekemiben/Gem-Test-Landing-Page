import Image from "next/image"



const Matching = () => {
  return (
      <div className='w-[1440px] h-[550px] border-2 border-cyan-950 flex flex-row items-center justify-center'>
          <div className="w-[1298px] h-[406px] border-2 border-cyan-950 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center border-3 border bg-green-800 w-[830px] h-[86px]">
                   <p className="font-Open_Sans items-center text-4xl leading-10 font-normal justify-center">For Head-to-Toe Matching</p>
              <p className="font-Open_Sans text-2xl">The collection that goes perfectly with your hoodie!</p>
              </div>
              <div className="w-[1298px] h-[264px] flex flex-row">
                  <div className="w-[370px] h-[168px] flex flex-row border-2 border-slate-300">
                      <Image src="/" alt="Matching photo" width={80} height={80} />
                      <div className="flex flex-col">
                          <p className="font-Open_Sans font-bold text-base">Personalized Photo & Slogan Text T-shirt</p>
                          <p></p>
                      </div>
                  </div>
              </div>
             
          </div>
    </div>
  )
}

export default Matching