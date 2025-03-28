import React from 'react'

const Card = ({backgroundColour = 'bg-gray-100', title, desc, button, href}) => {
  return (
    <div className="container-xl lg:container m-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      <div className={`${backgroundColour} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">
          {desc}
        </p>
        <a
          href={href}
          className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
          {button}
        </a>
        </div>
      </div>
    </div>
  )
}

export default Card