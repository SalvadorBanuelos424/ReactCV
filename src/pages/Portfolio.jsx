import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import Port1 from '../assets/1park.jpg';
import Port2 from '../assets/2air.png';
import Port3 from '../assets/3run.jpg';
import Port4 from '../assets/4hor.jpg';
import Port5 from '../assets/5duty.png';
import Port6 from '../assets/6pass.png';
import { FaGithub, FaLink } from 'react-icons/fa';



function Portfolio() {
  return (
    <div className='w-full h-full'>
      <div className='flex-wrap'>
        <PortfolioItem className='flex-auto' name='Park View' image={Port1}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HANDLEBARS -CSS -JAVASCRIPT
        <FaGithub className='text-6xl m-4 hover:text-sky-400'href='https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community'/>
        <FaLink href='https://salvadorbanuelos424.github.io/Park-Place-master-planned-community/4' className='text-6xl m-4 hover:text-sky-400 '/>
        </h1>
        
        <PortfolioItem className='flex-auto' name='AirPoll' image={Port2}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS -JAVASCRIPT
        <FaGithub href='https://github.com/SalvadorBanuelos424/AirPoll' className='text-6xl m-4 hover:text-sky-400 '/>
        <FaLink href='https://salvadorbanuelos424.github.io/AirPoll/' className='text-6xl m-4 hover:text-sky-400 '/>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Run Buddy' image={Port3}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS
        <FaGithub href='https://github.com/SalvadorBanuelos424/run-buddy' className='text-6xl m-4 hover:text-sky-400 '/>
        <FaLink href='https://salvadorbanuelos424.github.io/run-buddy/' className='text-6xl m-4 hover:text-sky-400 '/>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Horizon' image={Port4}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS
        <FaGithub href='https://github.com/SalvadorBanuelos424/Horiseon' className='text-6xl m-4 hover:text-sky-400 '/>
        <FaLink href='https://salvadorbanuelos424.github.io/Horiseon/' className='text-6xl m-4 hover:text-sky-400 '/>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Duty-Doer' image={Port5}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS -JAVASCRIPT
        <FaGithub href='https://github.com/SalvadorBanuelos424/Duty-Doer' className='text-6xl m-4 hover:text-sky-400 '/>
        <FaLink href='https://github.com/SalvadorBanuelos424/Duty-Doer/settings/pages#:~:text=https%3A//salvadorbanuelos424.github.io/Duty%2DDoer/' className='text-6xl m-4 hover:text-sky-400 '/>
        </h1>
        
        <PortfolioItem className='flex-auto' name='Password Generator' image={Port6}/>
        <h1 className='flex font-bold bg-sky-200 w-full mx-4 p-2 text-center rounded-b-3xl text-slate-700 text-3xl'>-HTML -CSS -JAVASCRIPT
        <FaGithub href='https://github.com/SalvadorBanuelos424/Random-Password-Generator' className='text-6xl m-4 hover:text-sky-400 '/>
        <FaLink href='https://salvadorbanuelos424.github.io/Random-Password-Generator/' className='text-6xl m-4 hover:text-sky-400 '/>
        </h1>


      </div>
    </div>
  )
}

export default Portfolio