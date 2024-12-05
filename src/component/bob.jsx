import '../index.css'
import men from '../img/men.svg'
function bob() {
    return [
        <div className="bob">
            <div className="flex">
                <p className=' ml-[440px] mt-[-210px]'>Basic Shirt</p>
                <p className='font-bold ml-[-50px] mt-[-170px]'>€49</p>
            </div>
            <div className="">
                <div className=" w-full h-[44px] "></div>
                <div className="men w-[596px] h-[636px] ml-80 rounded-[10px] relative">
                    <img src={men} alt="" />
                    <button className='scale bg-black text-white absolute ml-[20px] px-4 py-3 bottom-10 rounded-[10px] '>Shop Sweaters</button>
                </div>
            </div>
            <div className="box w-[596px] h-[636px] ml-[940px] mt-[-635px] rounded-[10px]">
                <div className="scaleee ">
                    <p className='text-[40px] py-[40px] ml-10 font-bold  '>“ First Light promises <br /> quality, timeless designs <br /> and with our mission it is <br /> truly a buy it for life <br /> purchase. “</p>
                    <p className='ml-10 mt-[170px] text-xl '>— Guera Latissa, Creative Director</p>
                </div>
            </div>
        </div>
    ];
}

export default bob;