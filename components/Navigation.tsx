"use client"
import { BuilderContent } from "@builder.io/react"

export const Navigation = (props) => {
   return <BuilderContent model="site-settings">{(data, loading, content) => {
      // console.log('data', data)
      // console.log()
      if (loading) {
         return <div>Loading...</div>
      } else {
         return <>
            <ul>
               {data?.navigationLinks?.map(link => {
                  return <div key={link.linkUrl} >
                     <a target="_blank" href={link.linkUrl}>
                        {link.linkText}</a>
                  </div>
               
               })}
            </ul>
            {props.children}
         </>
      }
   }}</BuilderContent>
}
