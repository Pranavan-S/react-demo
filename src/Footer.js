import React from 'react'

const Footer = () => {
    const now = new Date();
  return (
    <footer>Copyright &copy; {now.getFullYear()}</footer>
  )
}

export default Footer