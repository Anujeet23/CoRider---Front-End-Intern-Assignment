import { faFile, faPaperPlane, faPaperclip, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }

  return (
    <div className='w-screen h-[114px] mt-4'>
      <div className='h-[58px] rounded-md pt-[11px] pr-[12px] pb-[11px] pl-[12px] flex justify-between items-center shadow-md'>
    <div className='flex items-center'>
        <input type="text h-[18px] w-[247px]" placeholder='Enter Message' />
    </div>
    <div className='flex p-4 gap-3'>
    
        <FontAwesomeIcon onClick={handleClick} icon={faPaperclip} />
        {showDropdown &&
                        <div className="absolute bg-green-500 text-white rounded-xl right-0 -mt-9 w-30  border border-gray-200 shadow-lg z-10 flex">
                        <div className="hover:bg-gray-100 cursor-pointer p-2 flex items-center" >
                            <FontAwesomeIcon icon={faPhotoVideo} className="mr-2" />
                        </div>
                        <div className="hover:bg-gray-100 cursor-pointer p-2 flex items-center" >
                            <FontAwesomeIcon icon={faFile} className="mr-2" />
                        </div>
                    </div>
                    
                    }
        <FontAwesomeIcon icon={faPaperPlane} />
    </div>
</div>

      
    </div>
  )
}

export default Footer