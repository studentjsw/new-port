import React from 'react'

function Footer() {
  return (
    <div className='mt-5'>
      <div className='text-center pb-3 mynav ' style={{ height: '5rem' }}>
        <div className="text-center pt-2 " id="social-cont">
          <a target="blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=hema47173@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          <a target="blank" href="https://github.com/studentjsw"><i class="fa-brands fa-github"></i></a>
          <a target="blank" href="https://www.linkedin.com/in/hema-priya-j-6142a62a4/"><i class="fa-brands fa-linkedin"></i></a>
          <a target="blank" href="https://wa.me/+918667025771"><i class="fa-brands fa-whatsapp"></i></a>
          
        </div>

        <div className="text-center myname">
          @2023 Designed by Hema priya
        </div>
      </div>

    </div>
  )
}

export default Footer