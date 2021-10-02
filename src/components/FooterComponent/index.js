// css import

import './index.scss';

const FooterComponent = () => {
  return (
    <div className='footer-wrapper bg-dark color-white fs-15 fw-600 d-flex align-items-center justify-content-between p-3'>
      <ul className='footer-list d-flex justify-content-around align-items-center w-50 p-0 m-0'>
        <li className='link' tabIndex='0' aria-label='about us'>ABOUT US</li>
        <li className='link' tabIndex='0' aria-label='privacy'>PRIVACY</li>
        <li className='link' tabIndex='0' aria-label='terms of use'>TERMS OF USE</li>
        <li className='link' tabIndex='0' aria-label='careers'>CAREERS</li>
        <li className='link' tabIndex='0' aria-label='customer service'>CUSTOMER SERVICE</li>
      </ul>
      <ul className='p-0 m-0'>
        <li className='copyright' tabIndex='0' aria-label='copyright Le Travenues Technology Ltd. Dubai'>&copy; 2021 Le Travenues Technology Ltd. Dubai</li>
      </ul>
    </div>
  )
};

export default FooterComponent;
