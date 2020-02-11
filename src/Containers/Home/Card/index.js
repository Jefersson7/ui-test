import React, { useState, useEffect } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import './Sass/card.scss'
import thumbsData from './data.js'
import moment from 'moment'
import { cloneDeep } from 'lodash'
import momentDurationFormatSetup from 'moment-duration-format'

const Card = () => {
  const storageData = JSON.parse(localStorage.getItem('thumbsInfo'))
  console.log(thumbsData)
  const [state, setState] = useState(['', '', '', ''])
  const [data, setData] = useState(storageData ? storageData : thumbsData)
  const [voted, setVoted] = useState([false, false, false, false])
  const [openDialog, setOpenDialog] = useState(false)

  const formatDuration = date => {
    const duration = moment.duration(moment().diff(moment(date)), 'ms').format('M __,d __')
    return duration.split(',').join(' and ')
  }

  const selectThumb = (nextState, i) => {
    let newState = cloneDeep(state)
    newState[i] = nextState
    setState(newState)
  }

  const submitVote = i => {
    const newData = cloneDeep(data)
    const newVoted = cloneDeep(voted)
    if (state[i] === 'up') {
      newData[i].thumbsUp++
    } else if (state[i] === 'down') {
      newData[i].thumbsDown++
    }
    newData[i].totalThumbs++
    localStorage.setItem('thumbsInfo', JSON.stringify(newData))
    newVoted[i] = true
    setData(newData)
    setVoted(newVoted)
    setOpenDialog(true)
    setState(['', '', '', ''])
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  const handleVoteAgain = index => {
    const newVoted = cloneDeep(voted)
    newVoted[index] = false
    setVoted(newVoted)
  }

  useEffect(() => {
    momentDurationFormatSetup(moment)
  }, [])

  console.log(data)

  return (
    <>
      {data.map((data, i) => {
        return (
          <div className='card'>
            <img alt='thumb' src={data.imageUrl} />
            <div className='img-content'>
              <div className='header'>
                {data.thumbsUp >= data.thumbsDown ? (
                  <FaThumbsUp style={{ backgroundColor: '#1cbbb4' }} />
                ) : (
                  <FaThumbsDown style={{ backgroundColor: '#ffad1d' }} />
                )}
                <label>{data.name}</label>
              </div>
              <div className='info'>
                <p>
                  <b>{formatDuration(data.creationDate)} ago</b> in Business
                </p>
                {/*  */}
                {voted[i] ? (
                  <>
                    <p>Thank you for voting!</p>
                    <div className='vote-again'>
                      <button onClick={() => handleVoteAgain(i)}>Vote Again</button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit porttitor mi litora parturient mattis metus..</p>
                    <div className='thumb-action'>
                      <button className={state[i] === 'up' && 'selected'} onClick={() => selectThumb('up', i)}>
                        <FaThumbsUp />
                      </button>
                      <button className={state[i] === 'down' && 'selected'} onClick={() => selectThumb('down', i)}>
                        <FaThumbsDown />
                      </button>
                      <button disabled={state[i] === ''} onClick={() => submitVote(i)}>
                        Vote now
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className='summary'>
                <div className='results'>
                  <div className='thumbs-up-score'>
                    <FaThumbsUp className='up-icon' />
                    <label>{data.totalThumbs ? Math.ceil((100 * data.thumbsUp) / data.totalThumbs) : 0}%</label>
                  </div>
                  <div className='thumbs-down-score'>
                    <label>{data.totalThumbs ? 100 - Math.ceil((100 * data.thumbsUp) / data.totalThumbs) : 0}%</label>
                    <FaThumbsDown className='down-icon' />
                  </div>
                </div>
                <div className='thumbs-up-bar' style={{ width: `${data.totalThumbs ? (100 * data.thumbsUp) / data.totalThumbs : 100}%` }} />
                <div className='thumbs-down-bar' style={{ width: `${data.totalThumbs ? (100 * data.thumbsDown) / data.totalThumbs : 0}%` }} />
              </div>
            </div>
          </div>
        )
      })}
      {openDialog && (
        <div className='modal-dialog'>
          <div class='modal-content'>
            <MdClose onClick={handleClose} />
            <label>Su voto se ha registrado</label>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
