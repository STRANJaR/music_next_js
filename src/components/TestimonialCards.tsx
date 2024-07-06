'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicSchoolTestimonials = [
    {
        "quote": "This service exceeded my expectations in every way. The team was professional, efficient, and delivered exceptional results.",
        "name": "Jane Doe",
        "title": "CEO, Tech Innovators Inc."
    },
    {
        "quote": "I've never worked with a more dedicated and talented group of professionals. Their attention to detail and commitment to quality are unmatched.",
        "name": "John Smith",
        "title": "Marketing Director, Creative Solutions Ltd."
    },
    {
        "quote": "The project was completed on time and within budget, with fantastic results. I highly recommend their services.",
        "name": "Emily Johnson",
        "title": "Project Manager, Future Enterprises"
    },
    {
        "quote": "Their innovative approach and creative solutions helped our business grow exponentially. Truly a game-changer.",
        "name": "Michael Brown",
        "title": "Founder & CEO, StartUp Success"
    },
    {
        "quote": "Outstanding service from start to finish. Their expertise and dedication were evident in every step of the process.",
        "name": "Sarah Lee",
        "title": "COO, Global Ventures Corp."
    }
]


function MusicSchoolTestimonialCards() {
  return (
    <div
    className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.3] 
    relative flex flex-col items-center justify-center overflow-hidden"
    >
        <h2
        className="text-3xl font-bold text-center mb-8 z-10"
        >Hear our Harmony: Voices of Success</h2>
        <div
        className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={MusicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>

        </div>
    </div>

  )
}

export default MusicSchoolTestimonialCards