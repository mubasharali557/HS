import React from 'react'
import { FaHeart,FaStar,FaArrowRight }  from "react-icons/fa";

function page() {
  const products = [
    {
      id: 1,
      img: 'https://st41653.ispot.cc/Uploads/202402251101221324562046.jpg',
      name: 'DM HD1300 DUAL SSD CASE M.2+NVME ULTRA HIGH SPEED EDITION',
      price: 'Rs.0'
    },
    {
      id: 2,
      img: 'https://st41653.ispot.cc/Uploads/20240227102033778077528.jpg',
      name: 'KTS Speaker KTS-1371 wireless outdoor speakers audio speaker',
      price: 'Rs.0'
    },
    {
      id: 3,
      img: 'https://st41653.ispot.cc/Uploads/202312191725081705656075.jpg',
      name: 'Airox CH03 Turbo 2 Usb 2.4 A Mobile Charger || QC Approved | Fix cable',
      price: 'Rs.0'
    },
    {
      id: 4,
      img: 'https://st41653.ispot.cc/Uploads/202312200303151556746319.jpg',
      name: 'Airox AC02 PD Car Adapter Charger Small Size Ultra Fast | 20WATT',
      price: 'Rs.0'
    },
    {
      id: 5,
      img: 'https://st41653.ispot.cc/Uploads/20231219173128770194239.jpg',
      name: 'Airox CH14 Fast Mobile Charger for IPhone | TYPE C|2 USB Port',
      price: 'Rs.0'
    }
  ]
  return (
    <>
      <h1 className='text-3xl font-bold pl-6 pt-7 mt-10'>New Products</h1>
        <a href='all' className='flex ml-[1400px]' >
          <button className='text-lg text-black flex '>View All</button>
        <FaArrowRight className='font-light ml-1 mt-1.5'/>
        </a>
      <div className="grid grid-cols-5 gap-6 p-6 w-auto">
        {products.map((i) => (
          <div key={i.id} className='bg-white shadow-2xl border hover:shadow-black
           rounded-3xl p-4 text-center'>
            <div className='pl-42'>
              <FaHeart className='bg-white shadow-2xl 
               hover:text-red-500 rounded-full text-2xl'/>
            </div>
            <img src={i.img} alt={i.name} className='w-60 h-55 mx-auto ' />
            <h1 className="font-semibold mt-2">{i.name}</h1>
            <p className="text-black font-bold text-left pl-2 mb-3">{i.price}</p>
            
            <div>
                <FaStar className='hover:text-red-500'/>
                <p className='text-left pl-5 mt-[-20px]'>(0 reviews)</p>
                </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default page