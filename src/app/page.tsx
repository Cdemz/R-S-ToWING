import Image from 'next/image';
import { GiTowTruck } from 'react-icons/gi';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
export default function Home() {
  return (
    <main className="">
      {' '}
      <div className="relative font-prompt  ">
        {/* image  */}
        <div className="">
          <Image
            alt="hero-img"
            src="/images/hero1.png"
            width={300}
            height={300}
            priority={true}
            className="w-[100%] md:h-[40rem] h-[25rem]"
          />
        </div>
        <div className="bg-black h-full w-full absolute top-0 bg-opacity-50 md:p-[5rem] md:pt-[5rem] p-8  ">
          <div className="">
            <p>TOW TRUCK AND TOWING SERVICE</p>
            {/* HERO TEXT  */}
            <div className="flex gap-1 items-center">
              <div className="w-3 h-[7rem] bg-[var(--color-primary)] rounded "></div>
              <h1 className=" leading-[3rem]  text-6xl font-extrabold   ">
                R&S <span className="block ">TOWING</span>
              </h1>
            </div>
            <p className="md:w-[50%] md:text-lg text-xs">
              Stuck on the side of the road with a broken down car? Don't worry,
              our team of expert tow truck drivers are here to be your hero on
              the road. At R&S TOWING, we understand the stress and frustration
              of being stranded, which is why we offer reliable and efficient
              towing services to get you back on track in no time.
            </p>

            <button className="flex my-4  bg-[var(--color-primary)] px-4 py-2 rounded-xl text-[var(--color-bg)] gap-1 items-center font-semibold">
              ORDER A TOW <GiTowTruck size={26} />
            </button>
            {/* Emergency towing   */}
            <div className="hidden md:flex absolute left-[50%]">
              <div className="bg-[url('/images/red-bg.jpg')] bg-cover p-6 w-[16rem]    ">
                <h2>24/7 EMERGENCY TOWING</h2>
                <h1 className="text-2xl">+1-865-438-5984</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section  */}
      <section>
        <About />
      </section>
      {/* Service section  */}
      <section>
        <Services />
      </section>
      {/* Contact section  */}
      <section>
        <Contact />
      </section>
      <section>
        <Gallery />
      </section>
    </main>
  );
}
