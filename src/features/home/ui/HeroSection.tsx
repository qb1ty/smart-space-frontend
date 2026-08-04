export default function HeroSection() {
    return (
        <section className="pt-32 md:pt-48 lg:pt-80 px-4 sm:px-8 md:px-12 xl:px-23.25">
            <div className="flex flex-col items-center text-center md:text-left">
                <h1 className="font-montserrat font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    Lessons and insights
                </h1>
                
                <span className="font-montserrat font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-(--color-primary) mt-2">
                    from 8 years
                </span>
                
                <span className="font-montserrat font-medium text-sm md:text-base lg:text-lg text-neutral-500 mt-4 md:mt-6">
                    Where to grow your business as a photographer: site or social media?
                </span>
                
                <button 
                    className="
                        text-white bg-(--color-primary) rounded-xl
                        cursor-pointer transition-transform hover:scale-105 active:scale-95
                        mt-6 md:mt-8 py-3 px-8 xl:px-20
                    " 
                    type="button"
                >
                    Register
                </button>
            </div>
        </section>
    )
}