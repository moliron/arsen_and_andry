import '../index.css';
import women from '../img/women.svg'
import meen from '../img/meen.svg'
import up from '../img/UP.svg'

function kek() {
    return [
        <div className="App">
            <div className="box w-[596px] h-[636px] ml-[940px] mt-[-635px] rounded-[10px]">
                <div className="scaleee ">
                </div>
            </div>
            <div className="mt-16 ml-[-45px] flex justify-center items-center">
                <img className='rounded-l-lg ' src={women} alt="" />
                <img className='rounded-r-lg ' src={meen} alt="" />
            </div>
            <div className="flex px-[350px] mt-[-50px] text-[14px]">
                <p>WOMEN</p>
                <img src={up} alt="" className='px-[5px] mt-[px]' />
            </div>
            <div className="flex justify-center ml-14 mt-[-22px]">
                <p>MEN</p>
                <img src={up} alt="" className=' px-[5px]' />
            </div>
        </div>
    ];
}

export default kek;