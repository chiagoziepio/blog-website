

const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <p>Pio &copy; : {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer