
export const NavbarMobile = () => {
  return (
    <nav id="nav" class="overflow-y-auto items-center p-20 fixed top-0 right-0 h-screen mobile:w-max mobile:min-w-96 w-screen translate-x-full bg-[#262626] z-50 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500">
      <img width="100%" height="auto" src="/logo.svg" alt="logo" />
      <ul class="list-none text-2xl mobile:text-3xl flex flex-col gap-4 mt-16">
        <li>
          <a href="/" class="flex items-center gap-2">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z"/></svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/careers" class="flex items-center gap-2">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z"/></svg>
            <span>Careers</span>
          </a>
        </li>
        <li>
          <a href="/about" class="flex items-center gap-2">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
            About
          </a>
        </li>
        <li>
          <a href="/security" class="flex items-center gap-2">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3"/></svg>
            Security
          </a>
        </li>
      </ul>
      <div class="absolute bottom-10 left-20 flex flex-col mobile:flex-row gap-2 text-xl">
        <button class="border px-3 py-2 rounded-xl bg-gray/10 hover:bg-gray/15">Sign Up</button>
        <button class="border border-gray/11 bg-green/60 rounded-xl px-3 py-2 text-gray/10">Login</button>
      </div>
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



