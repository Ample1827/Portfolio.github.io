import React from 'react'

function ShowcaseSection() {
  return (
    <div id="work" className="app-showcase">
    <div className="w-full">
    <div className="showcaselayout">
        {/* LEFT */}
        <div className="first-project-wrapper">
        <div className="image-wrapper">
            <img src={`${import.meta.env.BASE_URL}images/project1.png`} alt="Ryde" />
            </div>
            <div className="text-content">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            TEMPORY NAME FOR THE APP
            </h2>
            <p className="text-white/70 md:text-xl">
                DISSCRIPTION OF THE PROJECT WILL BE ADDED HERE AND LATTE
            </p>
            </div>
          </div>
        {/* RIGHT */}
        <div className="project-list-wrapper flex flex-col gap-6 flex-1">
          <div className="project">
            <div className="image-wrapper bg-[#FFE7EB]">
              <img
                src="${import.meta.env.BASE_URL}images/project2.png"
                alt="Library Management Platform"
              />
            </div>
            <h2 className="text-xl font-semibold">
              The Library Management Platform
            </h2>
          </div>

          <div className="project">
            <div className="image-wrapper bg-[#FFE7EB]">
              <img
                src="${import.meta.env.BASE_URL}images/project3.png"
                alt="YC Directory App"
              />
            </div>
            <h2>
              YC Directory - A Startup Showcase App
            </h2>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ShowcaseSection
