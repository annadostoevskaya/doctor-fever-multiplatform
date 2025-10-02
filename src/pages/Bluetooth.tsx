import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Bluetooth() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-gray-100 rounded-[26px] w-90 shadow-lg py-3 px-14 text-center'>
        <p className='text-lg whitespace-nowrap font-sfpro'>
          Turn on Bluetooth to get started
        </p>
        <div className='flex items-center justify-center my-[10px]'>
          <svg className='w-[94px] h-[180px]'>
            <use xlinkHref='#icon-bt' />
          </svg>
        </div>
        <button
          onClick={() => navigate("/available-devices")}
          className='bg-gray-300 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition font-sfpro cursor-pointer'>
          Turn on
        </button>
      </div>
    </div>
  );
}
