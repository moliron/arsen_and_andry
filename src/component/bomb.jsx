import '../index.css';
import frame1 from '../img/Group 2.svg'
import frame4 from '../img/Frame4.svg'
import frame5 from '../img/Frame5.svg'
import frame6 from '../img/Frame6.svg'
import frame7 from '../img/Frame7.svg'
import frame8 from '../img/Frame8.svg'

function bomb() {
    return [
        <div className="">
            <div className="relative">
                <p className='flex justify-center items-center mt-6 text-[40px]'>We always have your back</p>
                <img src={frame1} alt="" className='mt-[20px] ml-[340px]' />
                <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-3 ml-[450px] rounded-[10px]'>100% Premium Cotton <br /> We use ethically sourced cotton only.</button>
                <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-[343px] ml-[1100px] rounded-[10px]'>Made in Portugal <br />With hand finished details </button>
                <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-3 ml-[1070px] rounded-[10px]'>Breathable material<br />Keeping you cool throughout the day</button>
            </div>
            <div className="flex justify-between border-b-2 mt-10 ml-[340px] border-t-2 w-[1216px] h-16 ">
                <div className="flex">
                    <img src={frame4} alt="" />
                    <p className='mt-2 ml-4'>Premium stain <br /> resistant fabrics</p>
                </div>
                <div className="flex">
                    <img src={frame5} alt="" />
                    <p className='mt-2 ml-4'>Free Express  <br /> Shipping</p>
                </div>
                <div className="flex">
                    <img src={frame6} alt="" />
                    <p className='mt-2 ml-4'>Free returns  <br /> within 30 days</p>
                </div>
                <div className="flex">
                    <img src={frame7} alt="" />
                    <p className='mt-2 ml-4'>Customers rate<br />  us 4.8 / 5.0</p>
                </div>
            </div>
            <div className="flex items-center">
                <img src={frame8} alt="" className='mt-10 ml-[340px] rounded-l-md' />
                <div className="-mt-10">
                    <div className="bg-white h-[610px] w-[608px]  rounded-r-md mt-10">
                        <div className="ml-12">
                            <p className='text-[32px] py-16 mt-20'>Visit our popup shop</p>
                            <p className='-mt-3'>Willemsparkweg 63 <br /> 1071 GS Amsterdam <br /> The Netherlands</p>
                            <div className="mt-7 flex">
                                <div className="">
                                    <p className='h-[100px] w-[102px] leading-10 text-[16px]'>Monday Tuesday Wednesday Thursday Friday Saturday Sunday</p>
                                </div>
                                <div className="">
                                    <p className='h-[10px] w-[100px] ml-28 leading-10 text-[16px]'>12.00 - 19.00 10.00 - 19.00 10.00 - 19.00 10.00 - 21.00 10.00 - 19.00 10.00 - 18.00 12.00 - 18.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="color w-full h-9 mt-10"></div>
        </div>
    ];
}
export default bomb;