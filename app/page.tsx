"use client"
import { builder } from '@builder.io/react'
import { Navigation } from '../components/Navigation'

builder.init("e54b1d16838d46fc94788f58755d4b56")

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navigation />
      {/* <Component {...pageProps} /> */}
    </>
  )
} 

