import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className={`fixed z-40 bottom-10 text-5xl text-white right-10 p-4 rounded-full shadow-md bg-[#29c1c2]/90 active:bg-[#fe7300] transition-transform duration-300 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      &#8679;
    </button>
  )
}
export default ScrollToTop
