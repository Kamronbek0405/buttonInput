import Frame1 from './hero.img/Frame1.png'
export const Home = () =>{
    return <div className='hero-title '>
    <div className='hero__container bg-slate-500 mt-20'>
        <div className='w-[500px] h-auto  ml-52 '>
            <h1 className='hero__text text-5xl font-medium text-white py-14'>Истина в качестве</h1>
            <p className=' text-white mb-8 '>КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
                КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
                ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</p>
                <button className=' hero__button w-[146px] h-[46px] bg-blue-950 text-white text-lg font-normal hover:shadow-lg hover:shadow-slate-500'>
                    <a href=''>Купить</a>
                </button>
        </div>
    </div>

</div>
}