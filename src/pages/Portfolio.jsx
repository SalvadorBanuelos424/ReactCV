import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import Port1 from '../assets/1park.jpg';
import Port2 from '../assets/2air.png';
import Port3 from '../assets/3run.jpg';
import Port4 from '../assets/4hor.jpg';
import Port5 from '../assets/5duty.png';
import Port6 from '../assets/6pass.png';


function Portfolio() {
  return (
    <div className='w-full h-full'>
      <div className='flex-wrap'>
        <PortfolioItem className='flex-auto' name='Park View' image={Port1}/>
        <h1 className='font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-4xl'>-HANDLEBARS -CSS -JAVASCRIPT</h1>
        <PortfolioItem className='flex-auto' name='AirPoll' image={Port2}/>
        <h1 className='font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-4xl'>-HTML -CSS -JAVASCRIPT</h1>
        <PortfolioItem className='flex-auto' name='Run Buddy' image={Port3}/>
        <h1 className='font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-4xl'>-HTML -CSS</h1>
        <PortfolioItem className='flex-auto' name='Horizon' image={Port4}/>
        <h1 className='font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-4xl'>-HTML -CSS</h1>
        <PortfolioItem className='flex-auto' name='Duty-Doer' image={Port5}/>
        <h1 className='font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-4xl'>-HTML -CSS -JAVASCRIPT</h1>
        <PortfolioItem className='flex-auto' name='Password Generator' image={Port6}/>
        <h1 className='font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-4xl'>-HTML -CSS -JAVASCRIPT</h1>
      </div>
    </div>
  )
}

export default Portfolio