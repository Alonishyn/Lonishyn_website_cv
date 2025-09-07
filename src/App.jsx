import { useRef, useEffect, useState} from 'react';
import Image from "./assets/profile.jpg"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
  setIsMenuOpen(false);
};

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

	function handleScrollAbout() {
        aboutRef.current.scrollIntoView()
    }

  function handleScrollExperience() {
        experienceRef.current.scrollIntoView()
    }

  function handleScrollProjects() {
        projectsRef.current.scrollIntoView()
    }

  function handleScrollContact() {
        contactRef.current.scrollIntoView()
    }

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
        <div className='font-bold text-3xl' >lonishyn</div>
        <div className='grap-10'>
          <ul className='hidden md:flex gap-10 text-lg'>
            <li><a onClick={handleScrollAbout} className='cursor-pointer hover:opacity-80 hover:underline'>About</a></li>
            <li><a onClick={handleScrollExperience} className='cursor-pointer hover:opacity-80 hover:underline'>Experience</a></li>
            <li><a onClick={handleScrollProjects} className='cursor-pointer hover:opacity-80 hover:underline'>Projects</a></li>
            <li><a onClick={handleScrollContact} className='cursor-pointer hover:opacity-80 hover:underline'>Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="text-black focus:outline-none"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>
</div>
      </nav>
      {isMenuOpen && (
        <ul className="animate-slideDown flex flex-col items-center gap-6 py-6 text-lg bg-white shadow-md md:hidden">
          <li><a onClick={() => {
              handleScrollAbout();
              handleMenuClick();
              }} className="hover:underline">About</a></li>
          <li><a onClick={() => {
              handleScrollExperience();
              handleMenuClick();
              }} className="hover:underline">Experience</a></li>
          <li><a onClick={() => {
              handleScrollProjects();
              handleMenuClick();
              }} className="hover:underline">Projects</a></li>
          <li><a onClick={() => {
              handleScrollContact();
              handleMenuClick();
              }} className="hover:underline">Contact</a></li>
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
          <button className='opacity-75 border-2 rounded-3xl p-1.5 px-2.5 bg-slate-950 text-white hover:bg-white hover:text-black text-[13px]' onClick={handleScrollContact}>
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
    <section className='min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center' ref={aboutRef}>
      <p className='text-[15px] opacity-75'>Get To Know More</p>
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
    <section id="experience" className="py-16 bg-white text-black text-center" ref={experienceRef}>
  <p className="text-sm text-gray-500 mb-2">Explore My</p>
  <h1 className="text-4xl font-bold mb-12">Experience</h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0">
    {/* Frontend */}
    <div className="border-2 border-gray-300 rounded-xl shadow-md p-8 w-full md:w-[500px]">
      <h2 className="text-xl font-semibold mb-6">Frontend Development</h2>
      <div className="grid grid-cols-2 gap-4 text-left">
        <article className="flex items-start gap-2">
          <img src="./html.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">HTML</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./css.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">CSS / Tailwind</h3>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./react.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">React JS</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./javascript.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">JavaScript</h3>
            <p className="text-sm text-gray-600">Basic</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./typescript.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">TypeScript</h3>
            <p className="text-sm text-gray-600">Basic</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./nginx.png" alt="icon" className="w-7 mt-1" />
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
          <img src="./postgresql.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">PostgreSQL</h3>
            <p className="text-sm text-gray-600">Basic</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./python.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">Python</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./fastapi.png" alt="icon" className="w-7 mt-1" />
          <div>
            <h3 className="font-semibold">FastAPI</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./git.png" alt="icon" className="w-9 mt-1" />
          <div>
            <h3 className="font-semibold">Git / GitHub</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </article>
        <article className="flex items-start gap-2">
          <img src="./sql.png" alt="icon" className="w-8 mt-1" />
          <div>
            <h3 className="font-semibold">SQL</h3>
            <p className="text-sm text-gray-600">Intermediate</p>
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

<section id="projects" className="py-25 px-4 bg-white text-center" ref={projectsRef}>
  <p className="text-gray-500 mb-2">Browse My Recent</p>
  <h1 className="text-4xl font-bold mb-10">Projects</h1>

  <div className="flex flex-wrap justify-center gap-6">
    {/* Project 1 */}
    <div className="bg-white rounded-2xl shadow-md p-6 w-80 flex flex-col items-center">
      <img
        src="./assets/project-1.png"
        alt="Project One"
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-4">Project One</h2>
      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = "https://github.com"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          GitHub
        </button>
        <button
          onClick={() => window.location.href = "https://github.com"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Live Demo
        </button>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-white rounded-2xl shadow-md p-6 w-80 flex flex-col items-center">
      <img
        src="./assets/project-2.png"
        alt="Project Two"
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-4">Project Two</h2>
      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = "https://github.com"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          GitHub
        </button>
        <button
          onClick={() => window.location.href = "https://github.com"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Live Demo
        </button>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-white rounded-2xl shadow-md p-6 w-80 flex flex-col items-center">
      <img
        src="./assets/project-3.png"
        alt="Project Three"
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-4">Project Three</h2>
      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = "https://github.com"}
          className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          GitHub
        </button>
        <button
          onClick={() => window.location.href = "https://github.com"}
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
    <section id="contact" className="py-20 text-center" ref={contactRef}>
  <p className="text-gray-500">Get In Touch</p>
  <h1 className="text-4xl font-bold mb-10">Contact Me</h1>

  <div className="flex justify-center gap-4 items-center mx-auto w-fit border border-gray-300 px-6 py-4 rounded-full">
    {/* Email */}
    <a
      href="mailto:example@email.com"
      className="flex items-center gap-2 text-gray-700 hover:text-black transition"
    >
      <img src="./assets/email.png" alt="Email icon" className="w-5 h-5" />
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
      <li><a href="#about" className="hover:text-black transition">About</a></li>
      <li><a href="#experience" className="hover:text-black transition">Experience</a></li>
      <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
      <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
    </ul>
  </nav>
  <p className="text-gray-400 text-sm">
    &copy; 2023 John Doe. All Rights Reserved.
  </p>
</footer>
    </div>
    </>
  )
}

export default App