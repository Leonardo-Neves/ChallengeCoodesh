import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Reload from './components/Reload/Reload';
import User from './components/User/User';
import Filter from './components/Filter/Filter';
import { Modal } from './components/Modal/Modal';

function App() {

  const [user, setUser] = useState([]);
  const [userModal, setUserModal] = useState({});
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(false);
  const [gender, setGender] = useState('');

  const [searchOption, setSearchOption] = useState('name')
  
  // Return data from users
  const getUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=50');
      setUser(user.concat(response.data.results))
    } catch (error) {
      console.error(error);
    }
  }

  // Open Modal
  const openModal = () => setShowModal(true);

  // Close Moda
  const closeModal = () => setShowModal(false);

  // Getting data from API
  useEffect(() => {
    setUser([])
    getUser()
  }, [])

  console.log(user)

  return (
    <>
      { showModal && <Modal close={closeModal} user={userModal} setUserModal={setUserModal}/>  }

      <header className='flex flex-row justify-between items-center sm:px-20 md:px-32 lg:px-44 xl:px-48 2xl:px-72 sm:h-32 md:h-46 lg:h-46 xl:h-46 2xl:h-60 bg-white'>
        <div className='flex flex-row items-center'>
          <div className='2xl:h-36 2xl:w-36 h-20 w-20 bg-gray-500'></div>
          <p className='font-bold sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl  sm:ml-6 md:ml-8 lg:ml-10 xl:ml-10 ml-10'>Company</p>
        </div>
        <User className='2xl:h-36 2xl:w-36 h-20 w-20 rounded-full' />
      </header>
      <body className='flex flex-col sm:px-0 md:px-0 lg:px-0 xl:px-10 2xl:px-96 items-center'>
        <p className='justify-self-center sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:mt-12 md:mt-16 lg:mt-18 xl:mt-20 2xl:mt-24 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-12 w-3/4 text font-medium'>Opus igitur est dicere passit dura omni specie. "Tu autem in spec, non videntur, nec omnino res est." Et examine ab eis praecepta eius quae habes, et primo et principaliter</p> 
        <div className='flex flex-row w-3/4 items-center sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-12'>
          <input className='h-16 w-full rounded-md border-2 sm:px-6 md:px-8 lg:px-10 xl:px-10 2xl:px-10 input sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium' placeholder='Searching' onChange={event => setSearch(event.target.value)}></input>
          <button className='flex flex-row h-16 w-32 bg-blue-dark rounded-md ml-4 items-center' onClick={() => { 
            if(!filter) {
            setFilter(true) 
            }  else {
              setFilter(false)
              setGender('')
            }
          }}>
            <Filter className='ml-4 mr-2 sm:h-8 md:h-8 lg:h-8 xl:h-8 2xl:h-8'/>
            <p className='font-medium text-white mr-4 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Filter</p>
          </button>
        </div>

        {
          filter && (
            <div className='flex flex-row w-3/4 h-16 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-12'>
              <div className='flex flex-col'>
                <p className='font-medium text-2xl text-gray-600'>Gender</p>
                <div className='flex flex-row items-center mt-4'>
                  <input type="radio" name='Male' value='male' className='' onChange={ e => setGender(e.target.value)}/><p className='font-medium text-xl text-gray-600 ml-4 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Male</p>
                  <input type="radio" name='Male' value='female' className='ml-4' onChange={ e => setGender(e.target.value)}/><p className='font-medium text-xl text-gray-600 ml-4 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Female</p>                
                  <input type="radio" name='Male' value='' className='ml-4' onChange={ e => setGender(e.target.value)}/><p className='font-medium text-xl text-gray-600 ml-4 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Normal</p>                
                </div>
              </div>
              <div className='flex flex-col  ml-8'>
                <p className='font-medium text-2xl text-gray-600'>Search</p>
                <div className='flex flex-row items-center mt-4'>
                  <input type="radio" name='search' value='name' className='' onChange={ e => setSearchOption(e.target.value)}/><p className='font-medium text-xl text-gray-600 ml-4 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Name</p>
                  <input type="radio" name='search' value='country' className='ml-4' onChange={ e => setSearchOption(e.target.value)}/><p className='font-medium text-xl text-gray-600 ml-4 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Country</p>                
                </div>
              </div>
              
            </div>
          )
        }

        <table className='w-3/4 border-collapse border table'>
          <tbody>
          <tr className=''>
            <th className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 border-collapse border border-primary'>Name</th>
            <th className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 border-collapse border border-primary'>Gender</th>
            <th className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 border-collapse border border-primary'>Birth</th>
            <th className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 border-collapse border border-primary'>Actions</th>
          </tr>
          {

            // Search filters
//val.location.country.toLowerCase().includes(search.toLowerCase()) ? val : null
            user.filter(val => search === '' ? val : searchOption === 'name' ? search === '' ? val : `${val.name.first} ${val.name.first}`.toLowerCase().includes(search.toLowerCase()) : searchOption === 'country' ? search === '' ? val : val.location.country.toLowerCase().includes(search.toLowerCase()) : null )
                .filter(val => gender === '' ? val : val.gender === gender ? val : null)
                .map((user, index) => {
              let birth = new Date(user.dob.date)
              return (
                <tr key={index}>
                  <td className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 font-normal text-center border-collapse border border-primary'>{user.name.first + " " + user.name.last}</td>
                  <td className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 font-normal text-center border-collapse border border-primary'>{user.gender}</td>
                  <td className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 font-normal text-center border-collapse border border-primary'>{`${birth.getDate()}/${Number(birth.getMonth()) + 1}/${birth.getFullYear()}`}</td>
                  <td className='sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl w-1/4 h-16 font-normal text-center border-collapse border border-primary'>
                    <button className='h-12 w-32 bg-blue-dark rounded-md' onClick={() => {
                      setUserModal(user)
                      openModal()
                    }}>
                      <p className='text-white font-medium'>View</p>
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      
        <button className='button mt-12 mb-16' onClick={() => getUser()}>
          <div className='flex flex-row items-center'>
            <Reload className='sm:h-12 md:h-12 lg:h-12 xl:h-14 2xl:h-16 sm:w-12 md:w-12 lg:w-12 xl:w-14 2xl:w-16 h-16 w-16'/>
            <p className='border-none sm:text-2xl md:text-x1 lg:text-2x1 xl:text-2xl 2xl:text-2xl ml-6 font-medium text-center border-collapse border border-primary justify-center'>Loading more...</p>
          </div>
        </button>

        
      </body>
      
      
    </>
  )  
}

export default App;
