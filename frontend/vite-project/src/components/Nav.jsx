export default function Nav() {
  return (
    <div className="w-full  bg-[rgba(0,0,0,0.25)]">
      <nav className="max-w-310 mx-auto px-5">
        <ul className="flex max-w-310 text-[16px] h-12.5 leading-normal cursor-pointer text-[#dcd8e6]">
          <li className="flex items-center hover:text-[#fad318] transition ease-in-out hover:bg-[#1f0a4d]">
            <a className="flex items-center justify-center tracking-wider gap-1.5 p-2.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  className="w-5 h-5 block"
                />
              </svg>

              <span>Categories</span>
            </a>
          </li>

          <li className="flex items-center hover:bg-[#1f0a4d] hover:text-[#fad318] transition ease-in-out">
            <a className="p-2.5 flex items-center justify-center h-full">
              Cheap Games
            </a>
          </li>

          <li className="flex items-center  hover:bg-[#1f0a4d] hover:text-[#fad318] transition ease-in-out">
            <a className="p-2.5 flex items-center justify-center h-full">
              Surfshark
            </a>
          </li>

          <li className="flex items-center hover:bg-[#1f0a4d] hover:text-[#fad318] transition ease-in-out">
            <a className="p-2.5 flex items-center justify-center h-full">
              Steam Gift Cards
            </a>
          </li>

          <li className="flex items-center hover:bg-[#1f0a4d] hover:text-[#fad318] transition ease-in-out">
            <a className="p-2.5 flex items-center justify-center h-full">
              X-mas gifts
            </a>
          </li>

          <li className="flex items-center hover:text-white transition ease-in-out">
            <a className="p-2.5">
              <span className="inline-block p-px rounded-sm bg-linear-to-r from-[#E0426E] to-[#7A4EDF] ">
                <span
                  className="flex items-center justify-center px-3.75 py-1.25 rounded-sm bg-linear-to-r from-[#D32252] to-[#3C1395] 
                    hover:bg-linear-to-r hover:from-[#A21A4A] hover:to-[#351183] transition ease-in-out font-semibold"
                >
                  Sale
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
