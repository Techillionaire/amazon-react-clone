import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' className='headerLogo' alt='logoImg'/>
        </div>

        <div className='headerSearch'>
            <input className='headerSearchInput' type='text'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search headerSearchIcon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
        </div>

        <div className='headerNav'>
            <div className='headerOption'>
                <span className='headerOptionLineOne'>Hello Guest</span>
                <span className='headerOptionLineTwo'>Sign in</span>
            </div>

            <div className='headerOption'>
                <span className='headerOptionLineOne'>Returns </span>
                <span className='headerOptionLineTwo'>& Orders</span>
            </div>

            <div className='headerOption'>
                <span className='headerOptionLineOne'>Your</span>
                <span className='headerOptionLineTwo'>Prime</span>
            </div>

            <div className='headerOptionBasket'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                </svg>
                <span className='headerOptionLineTwo headerBasketCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header