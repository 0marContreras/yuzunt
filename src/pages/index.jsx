import Downloads from "@/components/Downloads"
import Source from "@/components/Source"
import Image from "next/image"

export default function Home  (){
  return (
    <div className="bg-gray-900">
      <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                  <div className="flex-1 sm:hidden lg:block">
                      <Image width={300} height={300} src="https://i.imgur.com/cIWJK6Q.png" className="ml-10 md:max-w-lg sm:rounded-lg" alt="" />
                  </div>
                  <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <h3 className="text-red-600 font-semibold">
                      {`Yuzun't`}
                      </h3>
                      <p className="text-white  text-3xl font-semibold sm:text-4xl">
                          Fuck it. All yuzu and citra emulators and source code, Also Mario 64 pc
                      </p>
                      <p className="mt-3 text-gray-400">
                      {`Nintendo can't beat us. If you want to colaborate in this project send me an email: thanosnormal@gmai.com I'm looking for any kind of build and sorce code of these emulators.`}
                      </p>
                  </div>
              </div>
              <Downloads />
              <Source/>
          </div>
      </section>
      </div>
  )
}