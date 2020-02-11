import React, { useState } from 'react'
import './Sass/home.scss'
import { FaBars, FaSearch, FaWikipediaW, FaThumbsUp, FaThumbsDown, FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import Card from './Card'

const Home = ({ history }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className='main'>
        <div className='navbar'>
          <p>Rule of thumb.</p>
          <p onClick={() => history.push('/past-trials')}>Past trials</p>
          <p onClick={() => history.push('/how-it-works')}>How it works</p>
          <p onClick={() => history.push('/login')}>Log In/Sign Up</p>
          <FaSearch color='#FFF' />
        </div>
        <FaBars className='min-screen-menu-icon' onClick={handleOpenMenu} />
        {openMenu && (
          <div className='min-screen-menu'>
            <label>Rule of thumb.</label>
            <label onClick={() => history.push('/past-trials')}>Past trials</label>
            <label onClick={() => history.push('/how-it-works')}>How it works</label>
            <label onClick={() => history.push('/login')}>Log In/Sign Up</label>
            <FaSearch color='#FFF' />
          </div>
        )}
        <div className='thumb-info'>
          <div className='blur-img'>
            <p>What's your opinion on</p>
            <p>Pope Francis?</p>
            <p>
              He's talking tough on clergy sexual abuse, but is he just another papal perver protector? (thumbs down) or a true pedophile punishing pontiff?
              (thumbs up)
            </p>
            <p>
              <FaWikipediaW />
              <a href='https://en.wikipedia.org/wiki/Pope_Francis'>More Information</a>
            </p>
            <p>What's your Verdict</p>
          </div>
          <div className='thumb-buttons'>
            <button>
              <FaThumbsUp />
            </button>
            <button>
              <FaThumbsDown />
            </button>
          </div>
        </div>
      </div>
      <div className='thumb-info-min-screen'>
        <p>What's your opinion on</p>
        <p>Pope Francis?</p>
        <p>
          He's talking tough on clergy sexual abuse, but is he just another papal perver protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs
          up)
        </p>
        <p>
          <FaWikipediaW />
          <a href='https://en.wikipedia.org/wiki/Pope_Francis'>More Information</a>
        </p>
        <p>What's your Verdict</p>
        <div className='thumb-buttons'>
          <button>
            <FaThumbsUp />
          </button>
          <button>
            <FaThumbsDown />
          </button>
        </div>
      </div>
      <div className='content'>
        <div className='information'>
          <div className='brand'>
            <label>Speak out. Be heard.</label> <br className='breaker' />
            <label>Be counted</label>
          </div>
          <div className='site-info'>
            <label>Rule of Thumb is a crowd sourced court of public opinion where anyone can speak out and speak freely.</label> <br className='breaker' />
            <label>It's easy: You share your opinion, we analyze and put the data in a public report</label>
          </div>
          <MdClose />
          <button className='close'>Close</button>
        </div>
        <p className='content-header'>Votes</p>
        <div className='cards'>
          <Card />
        </div>
        <div className='add-more'>
          <p>Is there anyone else you would want us to add?</p>
          <button disabled>Submit a Name</button>
        </div>
      </div>
      <footer>
        <p onClick={() => history.push('/therms')}>Terms and conditions</p>
        <p onClick={() => history.push('/privacy-policy')}>Privacy Policy</p>
        <p onClick={() => history.push('/contact-us')}>Contact us</p>
        <p>Follow us</p>
        <FaFacebookSquare />
        <FaTwitter />
      </footer>
    </>
  )
}

export default Home
