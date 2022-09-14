import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    width: "100%",
    bottom: "1px",
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
        <p className="text-center">copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
