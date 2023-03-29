function Avatar({url,className}) {
  return (
    <img src={url} className={`h-10 rounded-full cursor-pointer 
    transition duration-150 transform hover:scale-110 ${className}`} loading="lazy" alt="Profile Pic"/>
  )
}

export default Avatar