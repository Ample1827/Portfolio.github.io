import React from 'react'

function ShowcaseSection() {
  return (
    <div id="work" className="app-showcase">
    <div className="w-full">
    <div className="showcaselayout">
        {/* LEFT */}
        <div className="first-project-wrapper">
        <div className="image-wrapper">
            <img src="images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Smart Inventory Management System (SIMS)
            </h2>
            <p className="text-white/70 md:text-xl">
            (SIMS) is a full-stack Python-based application designed to streamline inventory tracking,
             automate stock updates, and provide real-time analytics using AI insights.
             It helps businesses manage inventory efficiently through a user-friendly interface,
             intelligent forecasting, and seamless integration with existing workflows.
            </p>
            </div>
          </div>
        {/* RIGHT */}
        <div className="project-list-wrapper flex flex-col gap-6 flex-1">
          <div className="project">
            <div className="image-wrapper bg-[#FFE7EB]">
              <img
                src="images/project2.png"
                alt="Library Management Platform"
              />
            </div>
            <h2 className="text-xl font-semibold">
              A Management Platform
            </h2>
          </div>

          <div className="project">
            <div className="image-wrapper bg-[#FFE7EB]">
              <img
                src="images/project3.png"
                alt="YC Directory App"
              />
            </div>
            <h2>
              A Startup Showcase App
            </h2>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ShowcaseSection
