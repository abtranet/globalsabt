"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.main
        className="mx-6 max-w-4xl rounded-2xl bg-white/60 p-10 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-6">
          <Image src="/next.svg" alt="logo" width={64} height={24} className="dark:invert" />
          <h1 className="text-3xl font-semibold text-black">Globalsabt</h1>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          A small starter layout using Next.js app router and a touch of motion.
          Edit <code className="rounded bg-zinc-100 px-1 py-0.5">src/app/page.tsx</code> to
          begin customizing your app.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Get started
          </motion.a>

          <Link href="/about" className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium">
            About
          </Link>
        </div>
      </motion.main>
    </div>
  )
}
