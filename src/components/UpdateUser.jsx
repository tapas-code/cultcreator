import React from 'react'

function UpdateUser({ open, setOpen }) {
    return (
        <>
        { open &&  
            <div className='updateUser'>
                <form action="" className='form'>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                    <label htmlFor="">Email Id</label>
                    <input type="email" />
                    <label htmlFor="">Mob.No</label>
                    <input type="number" />
                    <label htmlFor="">Address</label>
                    <input type="text" />
                    
                    <button onClick={() => setOpen(false)}>Submit</button>
                </form>
            </div>
        }
        </>
    
  )
}

export default UpdateUser