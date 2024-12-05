import '../index.css';

import model from '../img/model1.svg'
import model2 from '../img/model2.svg'
import model3 from '../img/model3.svg'
import model4 from '../img/model4.svg'
import but from '../img/Button.svg'
import but2 from '../img/Button2.svg'
function aboba() {
    return [
        <div className="">
            <div className="">
                <p className='mt-9 text-[40px] font-bold items-center justify-center flex'>Women — Must Haves</p>
                <div className="mt-11 items-center flex justify-center gap-8">
                    <img src={but} alt="" className='scalee' />
                    <div className="">
                        <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model} alt="" /></div>
                        <div className="flex justify-between mt-6">
                            <p>Basic Shirt</p>
                            <p>€49</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model2} alt="" /></div>
                        <div className="flex justify-between mt-6 ">
                            <p>Beige Jumper</p>
                            <p>€99</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model3} alt="" /></div>
                        <div className="flex justify-between mt-6">
                            <p>Signature Jacket</p>
                            <p>€249</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model4} alt="" /></div>
                        <div className="flex justify-between mt-6">
                            <p>Navy Jumper</p>
                            <p>€49</p>
                        </div>
                    </div>
                    <img src={but2} className='scalee' alt="" />
                </div>
            </div>
        </div>
    ];
}

export default aboba;