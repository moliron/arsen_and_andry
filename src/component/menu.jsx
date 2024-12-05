import '../index.css';
import dots from '../img/Dots.svg'
import first from '../img/FIRST.svg'
import subtract from '../img/Subtract.svg'
import light from '../img/LIGHT.svg'

function Menu() {
    return [
        <div className='Menu color'>
            <header className='box items-center flex justify-between px-4 py-3'>
                <img src={dots} alt="" />
                <p className='font-bold text-[17px]'>SUMMER SALE UP TO 50% OFF</p>
                <img src={dots} alt="" />
            </header>
            <div className='items-center flex justify-center h-[280px] gap-[57px] ' >
            <img src={first} alt="" />
            <img src={subtract} alt="" />
            <img src={light} alt="" />
            </div>
        </div>
    ];
}

export default Menu;