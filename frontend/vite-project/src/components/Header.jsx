
export default function Header({ search, setSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (search) params.set("search", search);

    window.history.pushState({}, "", `?${params.toString()}`);
  };

  return (
    <header className="w-full max-w-310 px-5 block mx-auto">
      <div className="flex items-center min-h-13.75 py-5 gap-5">

        <a
          href="/"
          className="relative z-2 transition-opacity ease-in-out"
        >
          <img
            src="https://static.eneba.games/branding/v2/logoFull.svg"
            className="w-38.75 block"
            alt="Eneba logo"
          ></img>
        </a>

        <form
        onSubmit={handleSubmit}
        className="relative min-w-25 transition-opacity ease-in-out flex shrink basis-137.5">
         <div className="w-full flex">
            <label className="border border-solid border-white relative flex items-center w-full px-3.5 gap-1.5 cursor-text">

            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-7.5 h-7.5 text-white shrink-0">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>

            <input
            type="search"
            value={search}
            name="text"
            placeholder="Search for games, top-ups and more"
            onChange={(e) => setSearch(e.target.value)}
            className="flex items-center justify-center text-white pr-10 w-full min-h-13.75 font-extrabold text-[19px] focus:outline-none bg-transparent [&::-webkit-search-cancel-button]:appearance-none"/>

            </label>

            {search && (
        <button
          type="button"
          onClick={() => setSearch('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18 18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    
          </div>
        </form>


        <div>
          <button className="flex justify-center items-center gap-1.5 min-h-8.75 cursor-pointer transition ease-in-out hover:text-[#fad318] text-white text-[14px] mr-10">
            <img
                className="w-4 h-4"
                src="https://static.eneba.games/flags/lang/v2/lithuania.svg"
                alt="flag"
              />
              <div className="gap-1.75 flex tracking-wider ">
                  <span>English EU</span>
                  <span className="border-l border-solid border-white"></span>
                  <span>EUR</span>
              </div>
          </button>
        </div>

        <div>
          <button className="flex justify-center items-center cursor-pointer transition ease-in-out hover:text-[#fad318] w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>

        <div>
          <button className="flex justify-center items-center cursor-pointer transition ease-in-out hover:text-[#fad318] w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>
        
        <div>
          <div className="flex justify-center items-center gap-1.5 min-h-8.75 text-white text-[14px] mr-auto ">
              <div className="gap-1.75 flex tracking-wider items-center">

               

                <button className="cursor-pointer transition ease-in-out flex items-center justify-center hover:text-[#fad318]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                  <span>Log in</span>

                </button>
                
                <span className="border-l h-3.5  border-solid border-white"></span>
                  
                <button className="cursor-pointer transition ease-in-out hover:text-[#fad318]">
                  <span>Register</span>

                </button>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
