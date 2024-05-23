import React from 'react'

function Footr() {
  return (
<div className='fixed-bottom'>
      <footer  className="footer bg-primary text-light d-flex justify-content-center align-items-center w-100 pt-2 mt-5 mb-0 flex-wrap">
        <p>&copy; {new Date().getFullYear()} ReadRack. All rights reserved.</p>
      </footer>
</div>
  )
}

export default Footr