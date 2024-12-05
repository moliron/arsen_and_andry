import '../index.css'
import screenshot from '../img/Screenshot.svg'
import arrowup from '../img/ArrowUpRight.svg'

function gol() {
    return [
        <div className="">
            <div className='items-center flex justify-center  '>
                <img src={screenshot} alt="" className='w-full' />
            </div>
            <div className='text px-28 mt-[-200px] font-bold gap-[8px]'>
                <p className='text-[42px] '>Spring Season</p>
                <p className='ml-[1490px] text-[15px] '>VIEW COLLECTON</p>
                <img src={arrowup} alt="" className='mt-[-20px] ml-[1620px] ' />
            </div>
        </div>
    ];
}

export default gol;