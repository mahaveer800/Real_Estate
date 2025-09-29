import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 py-12 flex flex-col items-center gap-4">
        
        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href="https://github.com/mahaveer800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            href="https://wa.me/+91"
            className="flex items-center gap-2 hover:text-green-600 transition"
          >
            <i className="fa-brands fa-whatsapp text-2xl text-green-600"></i> WhatsApp
          </a>

          <a
            href="https://www.instagram.com/lozer_bravo"
            className="flex items-center gap-2 hover:text-red-800 transition"
          >
            <i className="fa-brands fa-instagram text-2xl text-red-800"></i> Insta
          </a>

          <a
            href="https://www.snapchat.com/add/manohar_8552"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <i className="fa-brands fa-snapchat text-yellow-400  text-2xl"></i> Snap
          </a>
        </div>

        {/* Copy text */}
        <p className="text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Mahaveer Singh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
