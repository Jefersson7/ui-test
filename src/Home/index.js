import React, { useState } from 'react'
import './Sass/home.scss'
import { FaBars, FaSearch, FaWikipediaW, FaThumbsUp, FaThumbsDown, FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import kayne from '../assets/kayne-west.jpg'
import zuck from '../assets/mark-zuckerberg.jpg'
import fernandez from '../assets/cristina-fernandez.jpg'
import malala from '../assets/malala-yousafzai.jpg'

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className='main'>
        <div className='navbar'>
          <p>Rule of thumb.</p>
          <p>Past trials</p>
          <p>How it works</p>
          <p>Log In/Sign Up</p>
          <FaSearch color='#FFF' />
        </div>
        <FaBars className='min-screen-menu-icon' onClick={handleOpenMenu} />
        {openMenu && (
          <div className='min-screen-menu'>
            <label>Rule of thumb.</label>
            <label>Past trials</label>
            <label>How it works</label>
            <label>Log In/Sign Up</label>
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
          <div class='thumb-buttons'>
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
        <div class='thumb-buttons'>
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
          <div className='card'>
            <img alt='thumb' src={kayne} />
            <div className='img-content'>
              <div className='header'>
                <FaThumbsUp />
                <label>Kanye West</label>
              </div>
              <div className='info'>
                <p>
                  <b>1 month ago</b> in Entertainment
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit porttitor mi litora parturient mattis metus..</p>
                <div className='thumb-action'>
                  <FaThumbsUp />
                  <FaThumbsDown />
                  <button>Vote now</button>
                </div>
              </div>
              <div className='summary'>
                <div className='results'>
                  <div className='thumbs-up-score'>
                    <FaThumbsUp className='up-icon' />
                    <label>50%</label>
                  </div>
                  <div className='thumbs-down-score'>
                    <label>50%</label>
                    <FaThumbsDown className='down-icon' />
                  </div>
                </div>
                <div className='thumbs-up-bar' style={{ width: '50%' }} />
                <div className='thumbs-down-bar' style={{ width: '50%' }} />
              </div>
            </div>
          </div>
          <div className='card'>
            <img alt='thumb' src={zuck} />
            <div className='img-content'>
              <div className='header'>
                <FaThumbsUp />
                <label>Mark Zuckerberg</label>
              </div>
              <div className='info'>
                <p>
                  <b>1 month ago</b> in Business
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit porttitor mi litora parturient mattis metus..</p>
                <div className='thumb-action'>
                  <FaThumbsUp />
                  <FaThumbsDown />
                  <button>Vote now</button>
                </div>
              </div>
              <div className='summary'>
                <div className='results'>
                  <div className='thumbs-up-score'>
                    <FaThumbsUp className='up-icon' />
                    <label>50%</label>
                  </div>
                  <div className='thumbs-down-score'>
                    <label>50%</label>
                    <FaThumbsDown className='down-icon' />
                  </div>
                </div>
                <div className='thumbs-up-bar' style={{ width: '50%' }} />
                <div className='thumbs-down-bar' style={{ width: '50%' }} />
              </div>
            </div>
          </div>
          <div className='card'>
            <img alt='thumb' src={fernandez} />
            <div className='img-content'>
              <div className='header'>
                <FaThumbsUp />
                <label>Cristina Fernandez de Kirchner</label>
              </div>
              <div className='info'>
                <p>
                  <b>1 month ago</b> in Politics
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit porttitor mi litora parturient mattis metus..</p>
                <div className='thumb-action'>
                  <FaThumbsUp />
                  <FaThumbsDown />
                  <button>Vote now</button>
                </div>
              </div>
              <div className='summary'>
                <div className='results'>
                  <div className='thumbs-up-score'>
                    <FaThumbsUp className='up-icon' />
                    <label>50%</label>
                  </div>
                  <div className='thumbs-down-score'>
                    <label>50%</label>
                    <FaThumbsDown className='down-icon' />
                  </div>
                </div>
                <div className='thumbs-up-bar' style={{ width: '50%' }} />
                <div className='thumbs-down-bar' style={{ width: '50%' }} />
              </div>
            </div>
          </div>
          <div className='card'>
            <img alt='thumb' src={malala} />
            <div className='img-content'>
              <div className='header'>
                <FaThumbsUp />
                <label>Malala Yousafzai</label>
              </div>
              <div className='info'>
                <p>
                  <b>1 month ago</b> in Entertainment
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit porttitor mi litora parturient mattis metus..</p>
                <div className='thumb-action'>
                  <FaThumbsUp />
                  <FaThumbsDown />
                  <button>Vote now</button>
                </div>
              </div>
              <div className='summary'>
                <div className='results'>
                  <div className='thumbs-up-score'>
                    <FaThumbsUp className='up-icon' />
                    <label>50%</label>
                  </div>
                  <div className='thumbs-down-score'>
                    <label>50%</label>
                    <FaThumbsDown className='down-icon' />
                  </div>
                </div>
                <div className='thumbs-up-bar' style={{ width: '50%' }} />
                <div className='thumbs-down-bar' style={{ width: '50%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='add-more'>
          <p>Is there anyone else you would want us to add?</p>
          <button>Submit a Name</button>
        </div>
      </div>
      <footer>
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
        <p>Contact us</p>
        <p>Follow us</p>
        <FaFacebookSquare />
        <FaTwitter />
      </footer>
    </>
  )
}

export default Home
