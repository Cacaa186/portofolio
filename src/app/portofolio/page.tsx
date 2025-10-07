import React from 'react'
import Image from 'next/image'

export default function Me() {
  return (
    <>
      <div className='bg-lime-700 min-screen'>
        <div>
          <div className='text-white'>
            {/* Navbar */}
            <div className='flex flex-row gap-5 p-4 bg-lime-900'>
              <div className='text-3xl mt-3'>
                Portofolio
              </div>
              <div className='flex flex-row gap-4 ml-225 p-4'>
                <ul className="flex space-x-6 text-white font-medium">
                  <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                  <li><a href="#about" className="hover:text-blue-400">About</a></li>
                  <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                  <li><a href="#portofolio" className="hover:text-blue-400">Portofolio</a></li>
                  <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </div>
            </div>

            {/*home*/}
            <section id="home" />
            <div className='flex flex-row mt-10'>
              <div className='grid grid-cols ml-30'>
                <div>
                  <div>
                    <div className='gap-3 mt-40'>
                      <div className='text-white text-3xl'> Hey! its me </div>
                      <div className='text-lime-300 text-6xl'> Andi Mahdiah Salsabila Fakhirah Asriadi</div>
                      <div className='text-2xl'> Siswi SMK Telkom Makassar </div>
                      <div> Jurusan RPL (Rekayasa Perangkat Lunak) </div>
                    </div>

                    <div className='mt-5'>
                      <div className='flex flex-row'>
                        <Image
                          src='/image/ig.jpg'
                          alt='ig'
                          width={50}
                          height={50}
                          className='rounded-full hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                        <Image
                          src='/image/tiktok.jpg'
                          alt='tiktok'
                          width={50}
                          height={50}
                          className='rounded-full ml-3 hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                        <Image
                          src='/image/wa.jpg'
                          alt='wa'
                          width={50}
                          height={50}
                          className='rounded-full ml-3 hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                        <Image
                          src='/image/X.jpg'
                          alt='x'
                          width={50}
                          height={50}
                          className='rounded-full ml-3 hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                      </div>
                    </div>

                    <button className="mt-6 px-6 py-3 bg-lime-600 text-white font-semibold rounded-full hover:scale-110 hover:bg-gray-200 hover:text-black hover:shadow-[0_0_30px_#bef264] transition w-80">
                      Tentang saya
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src='/image/infp.jpg'
                  alt='fotoku'
                  width={400}
                  height={400}
                  className='rounded-full mt-35 mr-80 w-cover h-cover border-3 border-lime-300 ' />
              </div>
            </div>


            {/* bout me */}
            <div className='mt-50'>
              <div className='flex flex-row ml-30'>
                <section id="about" className="px-6 py-32">
                  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex ">
                      <div className="w-[400px] h-[400px] md:w-[600px]">
                        <Image
                          src="/image/robo.jpg"
                          alt="foto"
                          width={400}
                          height={400}
                          className="object-cover rounded-full border-3 border-lime-300" />
                      </div>
                    </div>
                    <div className='font-poppins'>
                      <h2 className="text-5xl font-bold text-lime-300 ml-25 ">Get to know me!</h2>
                      <br />
                      <p className="text-justify font-medium ">
                        Hai semua! Saya Andi Mahdiah Salsabila Fakhirah Asriadi biasanya akrab dipanggil Caca.
                        Saya lahir pada tanggal 18 Juni 2009 membuat saya saat ini berumur 16 tahun.
                        Saya anak ke-2 dari 5 bersaudara dimana saya memiliki kakak perempuan dan 3 adik laki laki.
                        Saat ini, saya bersekolah di SMK Telkom Makassar dan menduduki kelas XI atau kelas 2 SMK.
                        Bersekolah di sekolah berbasis teknologi, membuat saya memilih jurusan
                        Rekayasa Perangkat Lunak sebagai fokus utama saya dalam meningkatkan kemampuan.
                        Mengingat saat ini kita sedang berada di zaman teknologi, saya percaya bahwa saya memiliki
                        peluang besar di bidang ini. Salam kenal!
                      </p>
                      <button className="mt-6 px-6 py-3 bg-lime-600 ml-30 text-white font-semibold rounded-full hover:bg-gray-200 hover:text-black hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition w-80">
                        Want to know more?
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* skills */}
            <div className='mt-40'>
              <section id="skills" />
              <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-lime-300">Kemampuan Saya</h2>
                <p className="text-base font-medium mt-4 text-2xl">
                  Beberapa skill yang saya miliki antara lain:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {["UI/UX Design", "Frontend Dev", "Public Speaking"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-8 rounded-2xl shadow-lg border-4 border-lime-300 text-lime-300 hover:shadow-[0_0_30px_#bef264 transition hover:scale-105">
                    <h3 className="text-2xl text-lime-600 font-bold mb-4">{skill}</h3>
                    <p className="text-gray-500 mb-6">
                      Skill ekslusif yang saya dapatkan dari sekolah di Telkom
                    </p>
                    <button className="mt-6 px-6 py-3 bg-lime-600 text-white font-semibold rounded-full hover:text-black hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition w-70">
                      Contact me
                    </button>
                  </div>
                ))}
              </div>

              {/*taktau*/}
              <section id="portofolio" />
              <div className='mt-50 ml-150 text-5xl'>
                My personality
              </div>
              <div className='flex flex-row'>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-lime-300 text-lime-300 hover:shadow-[0_0_30px_#bef264 transition hover:scale-105 mt-20 ml-25 w-150 h-150 ">
                  <Image
                    src='/image/person.jpg'
                    alt='person'
                    width='500'
                    height='200'
                    className='ml-3' />
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-lime-300 text-lime-300 hover:shadow-[0_0_30px_#bef264 transition hover:scale-105 mt-20 ml-20 w-150 h-150">
                  <Image
                    src='/image/person.jpg'
                    alt='person'
                    width='500'
                    height='200'
                    className='ml-3' />
                </div>
              </div>

              {/*contact*/}
              <div className='text-4xl mt-70 item-center justify-center text-center'>
                Contact Me
              </div>
              <div className='bg-white border-lime-300 border-3 rounded-md ml-17 mt-15 w-200 h-150'>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-190 mb-4 p-3 rounded-lg bg-gray-200 text-gray-400 border-2 border-lime-300 border-2 border-lime-300 mt-10 ml-10" />

                <input
                  type="text"
                  placeholder="Username"
                  className="w-310 mb-4 p-3 rounded-lg bg-gray-200 text-gray-400 border-2 border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300 mt-3 ml-10" />

                <input
                  type="text"
                  placeholder="your massages"
                  className="w-310 h-90 mb-4 p-3 rounded-lg bg-gray-200 text-gray-400 border-2 border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300 mt-3 ml-10" />
              </div>

              <div className='flex flex-row mt-5 ml-20'>
                        <Image
                          src='/image/ig.jpg'
                          alt='ig'
                          width={50}
                          height={50}
                          className='rounded-full hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                        <Image
                          src='/image/tiktok.jpg'
                          alt='tiktok'
                          width={50}
                          height={50}
                          className='rounded-full ml-3 hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                        <Image
                          src='/image/wa.jpg'
                          alt='wa'
                          width={50}
                          height={50}
                          className='rounded-full ml-3 hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                        <Image
                          src='/image/X.jpg'
                          alt='x'
                          width={50}
                          height={50}
                          className='rounded-full ml-3 hover:scale-110 hover:shadow-[0_0_30px_#bef264] transition' />

                      </div>

            </div>

          </div>
        </div>


      </div>
    </>
  )
}
