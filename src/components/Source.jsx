export default function Source() {
    return (
        <div className="py-8">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Source Code
                    </h3>
                    <p className="text-gray-400 mt-3">
                       Download Yuzu and Citra source code via Dropbox.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-3">

                        {/* LOGO 1 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/gbh8v9g6a30zi8y425nzg/h/YZ?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/GnFLXWg.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>

                        {/* LOGO 2 */}
                      <li>
                      <a href="https://www.dropbox.com/scl/fo/gbh8v9g6a30zi8y425nzg/h/YZEA?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/dAC9rtq.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>

                      </li>

                        {/* LOGO 3 */}
                      <li>
                        <a href="https://www.dropbox.com/scl/fo/gbh8v9g6a30zi8y425nzg/h/CITRA?dl=0&subfolder_nav_tracking=1"><img src="https://i.imgur.com/pmk40vL.png" alt="64" className="transition delay-30 duration-300 ease-in-out w-[120px] h-[120px] hover:scale-150"/></a>
                      </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}