import React from 'react'

function Footr() {
  return (
    <footer  className="footer bg-primary text-light d-flex justify-content-center align-items-center w-100 pt-2 mt-5 mb-0">
      <p>&copy; {new Date().getFullYear()} ReadRack. All rights reserved.</p>
    </footer>
  )
}

export default Footr