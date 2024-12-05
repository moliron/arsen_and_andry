import '../index.css'
import numeros from '../img/Numero.svg'
import bi from '../img/BI.svg'
import kf from '../img/KF.svg'
import fb from '../img/FB.svg'
import hb from '../img/HB.svg'
import frami from '../img/Frami.svg'
import image from '../img/image.svg'
import left from '../img/ArrowLeft.svg'
import right from '../img/ArrowRight.svg'

function golp() {
    return [
        <div className="golp">
            <div className='box items-center flex justify-between px-28 py-14 mt-[100px] '>
                <img src={numeros} alt="" />
                <img src={bi} alt="" />
                <img src={kf} alt="" />
                <img src={fb} alt="" />
                <img src={hb} alt="" />
            </div>
            <div className="items-center justify-between flex">
                <div className=' flex w-1/2'>
                    <img src={left} alt="" className='ml-[140px] scalee' />
                    <img src={frami} alt="" className='h-[600px] scale' />
                    <img src={right} alt="" className='scalee' />
                </div>
                <div className="w-1/2 relative">
                    <img src={image} alt="" className='w-full' />
                    <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-7 rounded-[10px]'>Shop Shirts</button>
                </div>
            </div>
            </div>
            ];
}

 export default golp;