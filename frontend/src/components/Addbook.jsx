import React from 'react'

function Addbook() {
  return (
    <>
    <div className='header'>Add books </div>
    <div className='inputs'>
     <input type='text' placeholder='Title of the book' required/>
    </div>
    <div className='inputs'>
     <input type='text' placeholder='ISBN' required/>
    </div>
    <div className='inputs'>
     <input type='text' placeholder='Author' required/>
    </div>
    <div className='inputs'>
     <input type='text' placeholder='Describe your book' required/>
    </div>
    <div className='inputs'>
     <input type='text' placeholder='Published -Date' required/>
    </div>
    <div className='inputs'>
     <input type='text' placeholder='Publisher of this book' required/>
    </div>
    <div className='inputs'>
     <button type='submit'>Submit</button>
    </div>
    </>
  )
}

export default Addbook