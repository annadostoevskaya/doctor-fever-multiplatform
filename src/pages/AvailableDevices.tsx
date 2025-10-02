import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AvailableDevices() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, []);

  return (
    <div className='flex justify-center min-h-screen'>
      <div className='w-full p-4'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='font-sfpro font-bold text-[34px]'>
            Available devices
          </h1>
          <button
            aria-label='Available'
            className='bg-white/50 backdrop-blur-3xl border border-white/50 rounded-[1000px] p-2 shadow-xl 
              hover:scale-105 hover:shadow-2xl hover:bg-white/40 
              active:scale-95 active:shadow-none transition-all duration-300 cursor-pointer w-[48px] h-[48px]'>
            <div className='flex items-center justify-center'>
              <svg className='w-[25px] h-[16px]'>
                <use xlinkHref='#icon-available' />
              </svg>
            </div>
          </button>
        </div>
        <div className='bg-white shadow divide-gray-200 w-full rounded-t-[26px] rounded-b-[26px]'>
          <Link
            to='/main'
            className='flex justify-between items-center px-[16px] pt-[12.5px] pb-[13.5px] hover:bg-gray-50 cursor-pointer rounded-t-[26px]'
          >
            <span className='text-[17px] text-gray-900 font-sfpro'>
              Alexey's Dr Fever
            </span>
            <div className='flex items-center gap-[16px]'>
              <div>
                <svg className='w-[19px] h-[25px]'>
                  <use xlinkHref='#icon-small_bt' />
                </svg>
              </div>
              <div>
                <svg className='w-[8px] h-[22px]'>
                  <use xlinkHref='#icon-small_arrow' />
                </svg>
              </div>
            </div>
          </Link>
          <div className='border-t border-gray-200 mx-2'></div>
          <Link
            to='/main'
            className='flex justify-between items-center px-[16px] pt-[12.5px] pb-[13.5px] hover:bg-gray-50 cursor-pointer'
          >
            <span className='text-[17px] text-gray-900 font-sfpro'>
              Temirbek's Dr Fever
            </span>
            <div className='flex items-center gap-[16px]'>
              <div>
                <svg className='w-[19px] h-[25px]'>
                  <use xlinkHref='#icon-small_bt' />
                </svg>
              </div>
              <div>
                <svg className='w-[8px] h-[22px]'>
                  <use xlinkHref='#icon-small_arrow' />
                </svg>
              </div>
            </div>
          </Link>
          <div className='border-t border-gray-200 mx-2'></div>
          <Link
            to='/main'
            className='flex justify-between items-center px-[16px] pt-[12.5px] pb-[13.5px] hover:bg-gray-50 cursor-pointer rounded-b-[26px]'
          >
            <span className='text-[17px] text-gray-900 font-sfpro'>
              Ganesh's Dr Fever
            </span>
            <div className='flex items-center gap-[16px]'>
              <div>
                <svg className='w-[19px] h-[25px]'>
                  <use xlinkHref='#icon-small_bt' />
                </svg>
              </div>
              <div>
                <svg className='w-[8px] h-[22px]'>
                  <use xlinkHref='#icon-small_arrow' />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
