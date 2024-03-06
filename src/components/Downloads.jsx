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
                        <a href="https://www.dropbox.com/scl/fo/g7ll8j2z088uhkq38mzis/h/YZ?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/GnFLXWg.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>

                        {/* LOGO 2 */}
                      <li>
                      <a href="https://www.dropbox.com/scl/fo/g7ll8j2z088uhkq38mzis/h/YZEA/Windows?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/dAC9rtq.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>

                      </li>

                        {/* LOGO 3 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/g7ll8j2z088uhkq38mzis/h/YZEA/Linux?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/N7vMgtC.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>
                          {/* LOGO 4 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/g7ll8j2z088uhkq38mzis/h/YZDROID?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/fxKu7FP.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>
                        
                          {/* LOGO 5 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/g7ll8j2z088uhkq38mzis/h/64?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/jBBpzF5.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}