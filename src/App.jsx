import { useEffect, useState } from 'react';
import Image from "./assets/profile.jpg"
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <nav className='flex w-full h-15 justify-between py-5 px-20 items-center  opacity-75' >
        <div className='font-bold text-3xl' >lonishyn</div>
        <div className='grap-10'>
          <ul className='flex gap-10'>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
      <section className='flex items-center justify-center min-h-screen gap-12 px-4 bg-white md:flex-row flex-col'>
      <div className=''>
        <img src={Image} alt="Artem Lonishyn profile picture" className='h-65 rounded-full' />
      </div>
      <div className='text-center'>
        <p className='text-[15px] mb-1'>Hello, I'm</p>
        <h1 className='text-4xl font-bold opacity-75 mb-1'>Artem Lonishyn</h1>
        <p className='mb-3 text-[20px]'>Full-stack Developer</p>
        <div className='flex gap-4 mt-1.5'>
          <button
            className='opacity-75 border-2 rounded-3xl p-1.5 px-2.5 hover:bg-slate-950 hover:text-white text-[13px]'
            onClick={() => window.open('/CV_Artem_Lonishyn.pdf', '_blank')}
          >
            Download CV
          </button>
          <button className='opacity-75 border-2 rounded-3xl p-1.5 px-2.5 bg-slate-950 text-white hover:bg-white hover:text-black text-[13px]' onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/Alonishyn" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
          </a>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default App
