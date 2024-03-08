import { faEllipsisVertical, faFlag, faLeftLong, faPenToSquare, faPhone, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const TripHead = () => {
    const chatData = useSelector((state: any) => state?.chatInfo?.data);
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }

  return (
    <div className='flex justify-center w-screen h-[130px]'>
    <div className='w-[343px]'>
        <div className='w-[343px] h-[30px] gap-[12px] p-6 flex justify-between items-center'>
            <div className='flex'>
                <FontAwesomeIcon className='p-1' icon={faLeftLong} />
                <h2 className='font-semibold'>{chatData?.name}</h2>
            </div>
            <div className='flex'>
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
        </div>
        <div className='w-[343px] h-[48px] gap-[12px] p-6 flex justify-between items-center mt-4'>
    <div className='flex'>
        <img className='w-[48px] h-[48px] bg-black rounded-full' src="" alt="Photo" />
        <p className='ml-2'>
            <span >From</span> {chatData?.from}
            <br />
            <span>To</span> {chatData?.to}
        </p>
    </div>
    <div className='flex relative'>
                        <FontAwesomeIcon onClick={handleClick} icon={faEllipsisVertical} />
                        {showDropdown &&
                            <div className="absolute -right-8 mt-[30px] w-48 bg-white border border-gray-200 rounded shadow-lg z-10 flex flex-col">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faUserGroup} />
                                    <li className="hover:bg-gray-100 cursor-pointer p-2" >Member</li>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <li className="hover:bg-gray-100 cursor-pointer p-2" >Share Number</li>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faFlag} />
                                    <li className="hover:bg-gray-100 cursor-pointer p-2" >Report</li>
                                </div>
                            </div>
                        }
    </div>
</div>

    </div>
</div>

    
  )
}

export default TripHead