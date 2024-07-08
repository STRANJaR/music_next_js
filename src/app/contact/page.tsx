'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

function page() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 ">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <input
          type="text"
          placeholder="xyz@gmail.com"
          className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
        typeof="text"
        rows={5}
        placeholder="Type your messege..."
        className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />

        <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800"         
                >
                    Send Messege
        </Button>
      </div>
      <BackgroundBeams />
    </div>
    
  )
}

export default page