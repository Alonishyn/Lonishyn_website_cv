import { useEffect, useState} from 'react';
import { Link} from "react-scroll";
import Image from "./assets/profile.jpg";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
  setIsMenuOpen(false);
};


	useEffect(() => {
    	AOS.init({
      		duration: 1400,    // тривалість анімації
      		once: true        // анімація один раз при появі
    		});
		}, []);


  return (
    <>
      <div className="min-h-screen bg-white text-black transition-colors duration-300">
      <nav className='flex w-full h-15 justify-between py-5 px-20 items-center  opacity-75' >
        <div className='font-bold text-3xl cursor-pointer' >lonishyn</div>
        <div className='grap-10'>
          <ul className='hidden md:flex gap-10 text-lg'>
            <li><Link to="about" smooth={true} duration={1000} className="cursor-pointer hover:opacity-80 hover:underline">About</Link></li>
            <li><Link to="skills" smooth={true} duration={1000} className='cursor-pointer hover:opacity-80 hover:underline'>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={1000} className='cursor-pointer hover:opacity-80 hover:underline'>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={1000} className='cursor-pointer hover:opacity-80 hover:underline'>Contact</Link></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
          <svg
            className="w-6 pt-3"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="fixed flex flex-col items-center gap-2 py-6 w-60 top-0 right-0 text-lg z-1 bg-white h-full shadow-md md:hidden border-l-2 border-gray-300">
          
          <li>
      <Link
        to="about"
        smooth={true}
        duration={600}
        className="cursor-pointer hover:underline"
        onClick={handleMenuClick} // щоб меню закривалось після кліку
      >
        About
      </Link>
    </li>
    <li>
          <Link
        to="skills"
        smooth={true}
        duration={600}
        className="cursor-pointer hover:underline"
        onClick={handleMenuClick}
      >
        Experience
      </Link>
      </li>
          <li>
      <Link
        to="projects"
        smooth={true}
        duration={600}
        className="cursor-pointer hover:underline"
        onClick={handleMenuClick}
      >
        Projects
      </Link>
    </li>
    <li>
      <Link
        to="contact"
        smooth={true}
        duration={600}
        className="cursor-pointer hover:underline"
        onClick={handleMenuClick}
      >
        Contact
      </Link>
    </li>
    <button
      onClick={() => setIsMenuOpen(false)}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 items-center text-2xl text-black opacity-80"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>
 {}
    </button>
        </ul>
      )}
      <section className='flex items-center justify-center h-[90vh] gap-10 px-4 bg-white md:flex-row flex-col'>
      <div className=''>
        <img src={Image} alt="Artem Lonishyn profile picture" className='h-65 rounded-full' />
      </div>
      <div className='text-center'>
        <p className='text-[15px] mb-1 opacity-75'>Hello, I'm</p>
        <h1 data-aos="fade-down" className='text-4xl font-bold opacity-80 mb-1'>Artem Lonishyn</h1>
        <p className='mb-3 text-[20px] opacity-75'>Full-stack Developer</p>
        <div className='space-x-5 mt-1.5' data-aos="fade-up">
          <button
            className='opacity-75 border-2 rounded-3xl p-1.5 px-2.5 hover:bg-slate-950 hover:text-white text-[13px]'
            onClick={() => window.open('/CV_Artem_Lonishyn.pdf', '_blank')}
          >
            Download CV
          </button>
          <button className='opacity-75 border-2 rounded-3xl p-1.5 px-2.5 bg-slate-950 text-white hover:bg-white hover:text-black text-[13px]'>
            <Link to="contact" smooth={true} duration={1000} className='cursor-pointer hover:opacity-80 hover:underline'>Contact info</Link>
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

    <section id='about' className='min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center'>
      <p className='text-sm text-gray-500 mb-2'>Get To Know More</p>
      <h1 className='text-3xl font-bold opacity-80 '>About Me</h1>
      <div className='mt-5 '>
        <div>
          <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className='border-2 border-gray-300 rounded-xl p-6 w-64 hover:shadow-md transition'>
              <img
                src="./experience.png"
                alt="Experience icon"
                className='w-8 h-8 mx-auto mb-3'
              />
              <h3 className="font-bold text-lg mb-1">Experience</h3>
              <p className="text-sm text-gray-700">2+ years Frontend Development <br />1+ years Full-Stack Development</p>
            </div>
            <div className='border-2 border-gray-300 rounded-xl p-6 w-64 hover:shadow-md transition'>
              <img
                src="./courses.png"
                alt="Courses icon"
                className='w-8 h-8 mx-auto mb-3'
              />
              <h3 className="font-bold text-lg mb-1">Courses</h3>
              <p className="text-sm text-gray-700">- LETPY The basics of Python.<br />TypeScript on “learntypescript.online”.<br/>- Web on JavaRush.<br />- React on “react-tutorial.app”.</p>
            </div>
          </div>
          <div className="mt-10 max-w-2xl text-gray-600 text-center mx-auto">
            <p>
              I really like programming. I am constantly learning something new
and strive to write very beautiful and high-quality websites. I
developed my own diary website for students, which I wanted to
launch in Ukraine. I took additional courses and am now working
on a new full-stack project.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./arrow.png"
        alt="Arrow icon"
        className="mt-10 animate-bounce h-12 opacity-80"
      />
    </section>
    <section id="skills" className="py-16 bg-white text-black text-center" >
  <p className="text-sm text-gray-500 mb-2">Explore My</p>
  <h1 className="text-3xl font-bold opacity-80 mb-10">Skills</h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0">
    {/* Frontend */}
    <div className="border-2 border-gray-300 rounded-xl shadow-md p-8 w-full md:w-[500px]">
      <h2 className="text-xl font-semibold mb-6">Frontend Development</h2>
      <div className="grid grid-cols-2 gap-4 text-left">
        <article className="flex items-start gap-2">
          <img src="./html.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">HTML</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./css.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">CSS / Tailwind</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./react.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">React JS</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./javascript.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">JavaScript</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./typescript.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">TypeScript</h3>
            <p className="text-sm text-gray-600">Basic</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./nginx.png" alt="icon" className="w-7 mt-2" />
          <div>
            <h3 className="font-semibold">Nginx</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
      </div>
    </div>

    {/* Backend */}
    <div className="border-2 border-gray-300 rounded-xl shadow-md p-8 w-full md:w-[500px]">
      <h2 className="text-xl font-semibold mb-6">Backend Development</h2>
      <div className="grid grid-cols-2 gap-4 text-left">
        <article className="flex items-start gap-2">
          <img src="./postgresql.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">PostgreSQL</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./python.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">Python</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./fastapi.png" alt="icon" className="w-7 mt-2" />
          <div>
            <h3 className="font-semibold">FastAPI</h3>
            <p className="text-sm text-gray-600">Basic</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./git.png" alt="icon" className="w-9 mt-1" />
          <div>
            <h3 className="font-semibold">Git / GitHub</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./sql.png" alt="icon" className="w-8 mt-2" />
          <div>
            <h3 className="font-semibold">SQL</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./linux.png" alt="icon" className="w-10 mt-1" />
          <div>
            <h3 className="font-semibold">Linux</h3>
            <p className="text-sm text-gray-600">Basic</p>
          </div>
        </article>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-10">
  <img 
    src="./arrow.png" 
    alt="Arrow icon" 
    className="h-12 animate-bounce opacity-80" 
  />
</div>
</section>

<section id="projects" className="py-25 px-4 bg-white text-center">
  <p className="text-gray-500 mb-2">Browse My Recent</p>
  <h1 className="text-3xl font-bold opacity-80 mb-10">Projects</h1>

  <div className="flex flex-wrap justify-center gap-6">
    {/* Project 1 */}
    <div className="bg-white rounded-2xl shadow-md p-6 w-80 flex flex-col items-center">
      <img
        src="./favicon3.ico"
        alt="Project One"
        className="rounded-lg mb-4 h-[100px]"
      />
      <h2 className="text-xl font-semibold mb-4">DIPLUV</h2>
      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = "https://github.com/Alonishyn/DIPLUV"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          GitHub
        </button>
        <button
          onClick={() => window.location.href = "https://dipluv.it"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Live Demo
        </button>
      </div>
    </div>

  </div>
  <div className="flex justify-center mt-10">
  <img 
    src="./arrow.png" 
    alt="Arrow icon" 
    className="h-12 animate-bounce opacity-80" 
  />
</div>
</section>
    <section id="contact" className="py-20 text-center" >
  <p className="text-gray-500">Get In Touch</p>
  <h1 className="text-3xl font-bold opacity-80 mb-10">Contact Me</h1>

  <div className="flex justify-center gap-4 items-center mx-auto w-fit border border-gray-300 px-6 py-4 rounded-full">
    {/* Email */}
    <a
      href="mailto:example@email.com"
      className="flex items-center gap-2 text-gray-700 hover:text-black transition"
    >
      <img src="./email.png" alt="Email icon" className="h-7 opacity-80" />
      a.lonishyn@gmail.com
    </a>

    {/* Divider */}
    <span className="text-gray-400">|</span>

    <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-black transition">
            <FaLinkedin size={28} /> Linkedin
          </a>
  </div>
</section>

<footer className="py-8 text-center mt-10 bg-gradient-to-t from-gray-100 via-transparent to-transparent">
  <nav className="mb-4">
    <ul className="flex justify-center gap-6 text-gray-700 text-sm">
      <li><Link to="about" smooth={true} duration={1000} className="cursor-pointer hover:text-black hover:underline transition">About</Link></li>
      <li><Link to="skills" smooth={true} duration={1000} className="cursor-pointer hover:text-black hover:underline transition">Skills</Link></li>
      <li><Link to="projects" smooth={true} duration={1000} className="cursor-pointer hover:text-black hover:underline transition">Projects</Link></li>
      <li><Link to="contact" smooth={true} duration={1000} className="cursor-pointer hover:text-black hover:underline transition">Contact</Link></li>
    </ul>
  </nav>
  <p className="text-gray-400 text-sm">
    &copy; 2025 Artem Lonishyn. All Rights Reserved.
  </p>
</footer>
    </div>
    </>
  )
}

export default App