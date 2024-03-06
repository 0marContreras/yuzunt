export default function Downloads() {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Downloads
                    </h3>
                    <p className="text-gray-400 mt-3">
                       Download Yuzu for windows, Android and Linux distributions. Mario 64 windows only. Citra build not available yet.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">

                        {/* LOGO 1 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/dpne1o2d8w3xqean5jdlk/h?rlkey=x3fz3ooklcsjzsgsi1k5ws751&dl=0"><img src="https://i.imgur.com/GnFLXWg.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>

                        {/* LOGO 2 */}
                      <li>
                      <a href="https://www.dropbox.com/scl/fo/8sswtaibjm9jh4z166926/h?rlkey=t87xspq0dkwbo796qatmns21s&dl=0"><img src="https://i.imgur.com/dAC9rtq.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>

                      </li>

                        {/* LOGO 3 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/ah54hm9cy2zxlu8zgzdr8/h?rlkey=ce3l4sd7rt32xiz3vxugqw1ho&dl=0"><img src="https://i.imgur.com/N7vMgtC.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>
                          {/* LOGO 4 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/yqv3fpfbpadr62nlf59n9/h?rlkey=jivpih99iatlu9kqk270vi4k2&dl=0"><img src="https://i.imgur.com/fxKu7FP.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>
                        
                          {/* LOGO 5 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/wk4ywtke0wobq4gmq1db0/h?rlkey=dni3emxtnrltdymezopwyhetb&dl=0"><img src="https://i.imgur.com/jBBpzF5.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}