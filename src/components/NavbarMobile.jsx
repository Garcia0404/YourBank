
export const NavbarMobile = () => {
  return (
    <nav id="nav" class="items-center p-20 fixed top-0 right-0 h-screen mobile:w-max mobile:min-w-96 w-screen translate-x-full bg-[#262626] z-50 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500">
      <ul class="list-none text-3xl flex flex-col gap-4 mt-16 ms-6">
        <li><a href="/">Home</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/security">Security</a></li>
      </ul>
      <button onClick={() => {
        const nav = document.getElementById('nav')
        nav.classList.add('translate-x-full')
      }} class="text-[#f2f2f2] z-20 absolute top-0 right-0 p-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-gray/70" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </nav>
  )
}



