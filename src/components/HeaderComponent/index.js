// css import
import './index.scss';

// images import
import logo from 'assets/logo.png';
import avatar from 'assets/avatar.png';

const HeaderComponent = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-dark d-flex align-items-center p-0'>
            <img className='logo' src={logo} alt='logo-preview' width='75' height='75' />
            <div className='manage-section d-flex justify-content-around align-items-center color-white fs-15 fw-600 w-50'>
                <span className='link' tabIndex='0' aria-label='book'>BOOK</span>
                <span className='link' tabIndex='0' aria-label='manage'>MANAGE</span>
                <span className='link' tabIndex='0' aria-label='experience'>EXPERIENCE</span>
                <span className='link' tabIndex='0' aria-label='where we fly'>WHERE WE FLY</span>
                <span className='link' tabIndex='0' aria-label='loyalty'>LOYALTY</span>
                <span className='link' tabIndex='0' aria-label='help'>HELP</span>
            </div>
            <div className='user position-absolute'>
                <img src={avatar} alt='user-avatar' width='30' height='30' />
                <span className='logged-user color-white fs-15 fw-600' tabIndex='0' aria-label='katy pearson'>Katy Pearson</span>
            </div>
        </nav>
    )
};

export default HeaderComponent;