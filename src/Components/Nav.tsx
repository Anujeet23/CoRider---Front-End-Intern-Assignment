import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTowerCell, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
const timeString = new Date().toLocaleTimeString(undefined, options);
// console.log(timeString); // Example output: "11:18"


  return (
    <div className='flex pt-[14px] pr-[26px] pb-[12px] pl-[27px] rounded-t-md justify-between w-screen h-12'>
    <div className='flex font-bold text-black w-[54px] h-[22px] size-[17px] items-center'>
        {timeString}
    </div>
    <div className='flex w-[78.26px] h-[13px] gap-2'>
    <FontAwesomeIcon icon={faTowerCell}/>
    <FontAwesomeIcon icon={faWifi} />
    <FontAwesomeIcon icon={faBatteryFull} />
    </div>
</div>

  )
}

export default Nav