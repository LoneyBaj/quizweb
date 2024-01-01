import React  from "react";

export default function BgAnimated(){
    return(
        <div className="relative">
            <div className="pointer-events-none absolute left-[200px] top-[100px] mix-blend-multiply  filter blur-2xl  opacity-40 bg-[#8A307F] rounded-full w-72 h-72 animate-blob"></div>
            <div className="pointer-events-none absolute left-[400px] top-[50px] mix-blend-multiply filter blur-2xl opacity-40 bg-[#79A7D3] rounded-full w-72 h-72 animate-blob animation-delay-2000"></div>
            <div className="pointer-events-none absolute left-[600px] top-[200px] mix-blend-multiply filter blur-2xl opacity-40 bg-[#6883BC] rounded-full w-72 h-72 animate-blob animation-delay-4000" ></div></div>
      )
    }