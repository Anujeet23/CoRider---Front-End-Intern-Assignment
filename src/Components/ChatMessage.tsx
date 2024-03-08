import React from 'react';

interface Props {
    msg: string,
    img: string
}

const ChatMessage: React.FC<Props> = ({msg, img}) => {
    return (
        <div className='mt-5 w-[319px] shadow-xl flex ml-5'>
          <div className='w-[100px] h-[100px]'>
            <img className='rounded-full' src={img} alt="Profile" />
          </div>
          <div className='ml-3'>
            <h1>{msg}</h1>
          </div>
        </div>
    );
}

export default ChatMessage;
