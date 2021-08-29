import React from 'react';

import User from './../User/User'
import Close from './../Close/Close'


export const Modal = ({ close, user, setUserModal }) => {

    let birth = new Date(user.dob.date)

    return (
        <div  className='flex flex-col justify-center items-center h-screen w-screen bg-black fixed bg-opacity-50 '>
        
            
            <div className='flex flex-col modal w-2/5 bg-backgroundModal rounded-md p-10'>
                <div className='flex flex-col items-center'>
                    <img className='h-48 w-48 rounded-full' src={user.picture.large}></img>
                    <p className='font-bold textColor sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl mt-2'>{`${user.name.first} ${user.name.last}`}</p>
                    <p className='font-normal textColor sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl mt-2'>{`${!user.id.name ? '' : user.id.name} ${!user.id.value ? '' : user.id.value}`}</p>
                </div>   
                <button className='w-0 h-0 self-end mr-2' onClick={() => {
                    setUserModal({})
                    close()
                }}>
                    <Close className='sm:h-8 md:h-8 lg:h-8 xl:h-8 2xl:h-8'/>
                </button>
                <p className='font-semibold textColor sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl mb-6 mt-6'>Contact</p>
                <div className='flex flex-row justify-between mb-6'>
                    <p className='font-normal textColor sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{`E-mail: ${user.email}`}</p>
                    <p className='font-normal textColor sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{`Phone: ${user.phone}`}</p>
                </div>
                <p className='font-semibold textColor sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl mb-6'>About</p>
                <div className='flex flex-row justify-between mb-6'>
                    <p className='font-normal textColor sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{`Birthday: ${birth.getDate()}/${Number(birth.getMonth()) + 1}/${birth.getFullYear()}`}</p>
                    <p className='font-normal textColor sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{`Nationality: ${user.nat}`}</p>
                    <p className='font-normal textColor sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{`Gender: ${user.gender}`}</p>
                </div>
                <p className='font-normal textColor sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{`Adress: ${user.location.street.name}, ${user.location.street.number} - ${user.location.city} - ${user.location.state} - ${user.location.country}`}</p>
            </div>
        
        </div>
    )
}