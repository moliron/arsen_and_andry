import '../index.css';
import vector from '../img/Vector.svg'
import vector_2 from '../img/Vector_1.svg'
import vector_3 from '../img/Vector_2.svg'

import upp from '../img/ArrowUpRight_1.svg'

function lol() {
    return [
        <div className="lol">
            <div className="">
                <div className=" w-full h-[54px] "></div>
                <div className="text-[40px] flex justify-center font-bold">
                    <p>Hot off the press</p>
                </div>
                <div className="ml-[500px] w-[900px] h-[270px] flex border-[2px] rounded-[10px] solid black;">
                    <div className='border-r-2 ml-11 mt-11 mb-[10px] '>
                        <img src={vector} alt="" />
                        <p className="mt-6 w-[250px] h-[200px]">“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
                        <p className='mt-[-80px] text2'>Read article</p>
                        <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
                    </div>
                    <div className="ml-11 mt-11 mb-[10px] border-r-2">
                        <img src={vector_2} alt="" />
                        <p className='mt-6 w-[250px] h-[200px]'>“First light proves it is possible to combine great design with the finest materials available.”</p>
                        <p className='mt-[-70px] text2'>Read article</p>
                        <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
                    </div>
                    <div className="ml-11 mt-11">
                        <img src={vector_3} alt="" />
                        <p className='mt-6 w-[250px] h-[200px]'>“Redefining excellence with premium materials and visionary robust design.”</p>
                        <p className='mt-[-70px] text2'>Read article</p>
                        <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
                    </div>
                </div>
            </div>
        </div>
    ];
}

export default lol;