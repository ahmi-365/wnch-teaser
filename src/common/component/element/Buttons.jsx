

const Buttons = ({ className = '', title = '', theme = 'dark' }) => {
  const isPrimary = theme === 'primary';
  const btnBg = isPrimary ? 'bg-wnch-green' : 'dark:bg-neutral-100 bg-wnch-blue hover:bg-wnch-blue';
  const textCol = isPrimary ? 'text-black' : 'dark:text-black text-white';
  const textHoverCol = isPrimary ? 'text-black' : 'group-hover:text-black group-hover:dark:text-white dark:text-black text-white';
  const blobCol1 = isPrimary ? 'bg-[#7ab01c]' : 'dark:bg-wnch-blue bg-blue-700';
  const blobCol2 = isPrimary ? 'bg-[#9ad429]' : 'dark:bg-wnch-blue bg-blue-700';

  return (
    <button className={`${className} ${btnBg} transition-all duration-1000 hover:delay-75 group px-6 py-2 overflow-hidden relative rounded-full`}>
      <h1 className={`${textCol} whitespace-nowrap font-semibold transition-all duration-500 group-hover:translate-y-[-150%]`}>
        {title}
      </h1>
      <h1 className={`${textHoverCol} whitespace-nowrap font-semibold z-[99] transition-all duration-500 absolute translate-y-[10%] group-hover:translate-y-[-100%]`}>
        {title}
      </h1>
      <div className={`w-[20%] rounded-full transition-all duration-500 ${blobCol1} absolute h-[30px] inset-0 translate-y-[250%] group-hover:translate-y-[-50%]`}></div>
      <div className={`w-[30%] rounded-full transition-all duration-500 ${blobCol1} left-[30px] absolute h-[30px] inset-0 translate-y-[250%] group-hover:translate-y-[-50%]`}></div>
      <div className={`w-[30%] rounded-full transition-all duration-500 ${blobCol1} left-[80px] absolute h-[30px] inset-0 translate-y-[250%] group-hover:translate-y-[-50%]`}></div>
      <div className={`w-[160%] top-[-10px] h-[50px] left-[-5px] ${blobCol2} rounded-3xl transition-all duration-500 absolute group-hover:translate-y-[0%] translate-y-[250%]`}></div>
    </button>
  );
};

export default Buttons;
