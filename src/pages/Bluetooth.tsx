export default function Bluetooth() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-[#F2F2F7]'>
      <div className='bg-gray-100 rounded-[26px] w-90 shadow-lg py-3 px-14 text-center'>
        <p className='text-lg whitespace-nowrap font-sfpro'>
          Turn on Bluetooth to get started
        </p>
        <div className='flex items-center justify-center my-[10px]'>
          <svg className='w-[94px] h-[180px]'>
            <use xlinkHref='#icon-b_bluetooth' />
          </svg>
        </div>
        <button className='bg-gray-300 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition font-sfpro cursor-pointer'>
          Turn on
        </button>
      </div>
    </div>
  )
}
