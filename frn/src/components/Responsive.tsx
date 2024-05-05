
const Responsive = () => {
  return (
    <div className=' bg-red-950 text-white sm:bg-black sm:text-white md:bg-green-600 md:text-yellow-50 lg:bg-res-500 lg:text-[#52223] xl:bg-blue-500 xl:text-white 2xl:bg-gray-900 2xl:text-white'>
      <div className='w-[100px] h-[100px] shadow-sm shadow-orange-100 rounded-lg flex justify-center items-center'>
        <p className=" hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"> sm</p>
        <p className=" hidden sm:hidden lg:hidden xl:hidden 2xl:hidden md:block"> md</p>
        <p className=" hidden sm:hidden md:hidden xl:hidden 2xl:hidden lg:block"> lg</p>
        <p className=" hidden sm:hidden md:hidden lg:hidden  2xl:block xl:block"> xl</p>
        <p className=" hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block"> 2xl</p>

      </div>
    </div>
  )
}

export default Responsive
