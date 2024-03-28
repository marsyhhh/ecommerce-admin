const Button = ({ children }) => {
  return (
    <>
      <button className="outline outline-1 outline-zinc-600 px-2 rounded-md flex justify-center items-center bg-bgColor hover:bg-bgSecondaryColor ease-in-out duration-300 hover:outline-none">
        {children}
      </button>
    </>
  )
}

export default Button
