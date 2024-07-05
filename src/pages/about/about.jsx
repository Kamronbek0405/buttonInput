import React from "react";
import "./style.css";
import Image from './section-img/image1.png'
import Image2 from './section-img/image2.png'
import Image3 from './section-img/image3.png'
import Image4 from './section-img/image4.png'
import Image5 from './section-img/image5.png'
import Image6 from './section-img/image6.png'
import Image7 from './section-img/image7.png'
export const About = () => {
    return <div >
        <div className="w-[100%] h-[125vh] flex items-center justify-center ">
            <div className="w-[79%] h-[820px]  flex flex-wrap gap-5" >
                <div className='product flex items-end'  >
                    <h1 className='section__text ml-5 w-[200px] font-medium text-white mb-20'>
                        Колбасные
                        и мясные изделияЦена от 150 ₽
                        <br />
                        <span className='section__span font-light '>56 товаров</span>
                    </h1>
                    <img src={Image} alt="" />
                </div>
                <div className="product2 flex items-end">
                    <div className='product__div text-white mb-10 ml-5'>
                        <h1 className='product__text font-medium text-3xl text-white'>
                            Молочные продукты
                        </h1>
                        <p>Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко, Сметана, Творог, Творожная масса</p>
                    </div>
                    <img src={Image2} alt="" />

                </div>
                <div className="product3 flex items-end justify-between">
                    <h1 className='product__text text-white font-medium text-lg mb-36 ml-5'>Морепродукты
                        <br />  <span className='produxt__span font-light'>Рыба, Икра, Креветки</span>
                    </h1>
                    <img src={Image3} alt="product" />
                </div>
                <div className="product4 flex items-end justify-between">
                    <h1 className='product__text font-medium text-lg text-white mb-40 ml-6'>
                        Пиво
                        <br /><span className='product__span font-light'>Крафтовое пиво</span>
                    </h1>
                    <img src={Image4} alt="produxt" />
                </div>
                <div className="product5 flex items-center ">
                    <h1 className='product__text font-medium text-xl text-white ml-7'>Замороженные
                        продукты
                        <br /><span className='product__span font-light text-sm'>Замороженные овощи, Замороженные фркуты</span>
                    </h1>
                    <img src={Image5} alt="" />
                </div>
                <div className="product6">
                    <div className='prosuct__div text-white ml-5 mt-7'>
                        <h1 className='product__text text-2xl font-medium'>Мёд</h1>
                        <p className='font-light w-[175px] mt-3'>Мед горный 0,25 кг,
                            Мед с облепихой 0,25 кг,
                            Мед с черникой 0,25 кг,
                            Мед с разнотравья 0,25 кг,
                            Мед цветочный 0,25 кг
                        </p>
                    </div>
                </div>
                <div className="product7 flex items-center ">
                    <div className='product__div text-white ml-6 mb-7'>
                        <h1 className='product__text font-medium text-xl mb-10'>Свежие овощи</h1>
                        <p className='product__lorem font-light'>Картофель, Огурцы, Помидоры</p>
                    </div>
                    <img src={Image6} alt="productImg" />
                </div>
                <div className="product8 flex items-center ">
                    <h1 className='product__text font-medium text-2xl ml-7 mb-10 text-white'>Свежие фрукты
                        <br /><span className='product__span font-light text-base'>Сезонные яблоки</span>
                    </h1>
                    <img src={Image7} alt="product" />
                </div>
            </div>
        </div>
    </div>
}
