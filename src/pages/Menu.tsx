import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Menu() {
  return (
    <div>
      <body>
        <Sidebar />

        <Header />

        {/* Main content */}
        <main className="nxl-container">
          <div className="nxl-content">

          </div>
        </main>
      </body>
    </div>
  )
}

export default Menu