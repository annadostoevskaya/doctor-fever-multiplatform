import { Link } from 'react-router-dom'

export default function MainActivity() {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='w-full pt-4 pr-8 pl-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='font-sfpro font-bold text-[34px]'>Dr. Fever</h1>
          <button
            aria-label='settings'
            className='bg-white/50 backdrop-blur-3xl border border-white/50 rounded-full p-2 shadow-xl 
                           hover:scale-105 hover:shadow-2xl hover:bg-white/40
                           active:scale-95 active:shadow-none transition-all duration-300 cursor-pointer w-[48px] h-[48px]'
          >
            <div className='flex items-center justify-center'>
              <svg className='w-[23px] h-[24px]'>
                <use xlinkHref='#icon-settings' />
              </svg>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Link
            to="/human-body-temperature"
            className="rounded-[34px] w-40 h-40 shadow-lg p-10 text-center flex flex-col items-center 
               bg-[rgba(250,250,250,0.7)] backdrop-blur-3xl border border-white/80 cursor-pointer 
               hover:scale-105 hover:shadow-none transition-all duration-300"
          >
            <div className="mb-3">
              <div className="flex items-center justify-center h-20">
                <svg className="w-[37px] h-[75px]">
                  <use xlinkHref="#icon-temperature" />
                </svg>
              </div>
            </div>
            <span className="text-xs font-sfpro whitespace-nowrap">
              Body temperature
            </span>
          </Link>
          <Link
            to="/pager"
            className="rounded-[34px] w-40 h-40 shadow-lg p-10 text-center flex flex-col items-center 
               bg-[rgba(250,250,250,0.7)] backdrop-blur-3xl border border-white/80 cursor-pointer 
               hover:scale-105 hover:shadow-none transition-all duration-300"
          >
            <div className="mb-3">
              <div className="flex items-center justify-center h-20">
                <svg className="w-[75px] h-[56px]">
                  <use xlinkHref="#icon-pager" />
                </svg>
              </div>
            </div>
            <span className="text-xs font-sfpro whitespace-nowrap">Pager</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
