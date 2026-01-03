export default function Card({ game }) {

const discount = game.discount;
const price = Number(game.price);

const oldPrice = discount > 0
  ? (price / (1 - discount / 100)).toFixed(2)
  : null;

const cashback = (price * 0.091).toFixed(2);

const platformIcons = {
  pc: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 18h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1zM4 7h16v10H4V7z"/>
      <path d="M6 9h12v2H6V9zm0 3h8v2H6v-2z"/>
    </svg>
  ),
  xbox: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.102 21.033A11.947 11.947 0 0012 24a11.96 11.96 0 007.902-2.967c1.054-.91-1.204-2.606-2.34-3.582a11.968 11.968 0 01-11.124 0c-1.136.976-3.394 2.672-2.336 3.582zM12 4.855c-1.404 0-2.925.806-4.568 2.387C5.803 8.77 4.35 10.787 3.737 12c.612 1.212 2.065 3.23 3.695 4.758C9.075 18.34 10.596 19.145 12 19.145s2.925-.806 4.568-2.387c1.63-1.528 3.083-3.546 3.695-4.758-.612-1.212-2.065-3.23-3.695-4.758C14.925 5.66 13.404 4.855 12 4.855zm-6.132-.445C7.965 2.46 9.967 1.517 12 1.517c2.033 0 4.035.943 6.132 2.893.552-.303 1.156-.49 1.708-.49.962 0 1.594.5 1.594 1.517 0 1.805-1.676 4.088-2.869 5.428C16.61 13.617 14.436 16 12 16c-2.436 0-4.61-2.383-6.565-5.135C4.242 9.525 2.566 7.242 2.566 5.437c0-1.017.632-1.517 1.594-1.517.552 0 1.156.187 1.708.49z"/>
    </svg>
  ),
  playstation: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.985 2.596v17.548l3.546 1.251V0zM11.985 21.775l8.015 2.815v-3.251l-8.015-2.815v3.251zm10.015-3.251V15.29l-3.251 1.251v3.251l3.251-1.268zm-18-15.023v15.023l3.251 1.251V0l-3.251 3.501z"/>
    </svg>
  ),
  steam: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.84 2.84 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77-3.78 1.69-3.78 3.77v.05l-2.37 3.46-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84.33-.8-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03.53.21.94.62 1.15 1.15.22.52.22 1.1 0 1.62-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04l1.22.5m9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52 2.5 2.5 0 0 1 2.51-2.51 2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89 1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89z"/>
    </svg>
  ),
  nintendo: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .6h7.1l9.85 15.55V.6H24v22.8h-7.04L7.1 7.85v15.55H0V.6z"/>
    </svg>
  ),
};

  return (
    <div className="
      bg-[#1f0a4d]
      overflow-hidden
      border border-[#63e3c2]
      transition
      cursor-pointer
    ">
      <div className="relative">
        <img
        className="w-full object-fill select-none max-h-87.5"
        src={game.image_url}
        alt="game"
        draggable="false"
        decoding="async"
        fetchPriority="high"
        />

        <div className="absolute bottom-8">
          <span className="
            flex items-center gap-1
            bg-[#63e3c2]
            text-[#1f0a4d]
            text-[12px]
            font-[550]
            px-1.25 py-1.75
            tracking-wide
          ">
            ⟳ CASHBACK
          </span>
        </div>
        <div className="absolute bottom-0 p-1.5 flex justify-center items-center w-full 
        bg-black/55 backdrop-blur-[5px]">
            <img></img>
            <span className="font-extrabold text-[10px] text-[rgba(255, 255, 255, .85)] uppercase flex justify-center items-center gap-1"> {platformIcons[game.platform]} {game.platform} </span>
        </div>
      </div>

       

 
      <div className="p-3 pt-4">
        
        <h3 className="text-[12px] font-extrabold tracking-wide max-h-[3em] pb-2">
          {game.title}
        </h3>

        <h3 className="text-[12px] font-extrabold tracking-wide max-h-[3em] pb-2 text-[#23c299]">
          GLOBAL
        </h3>

          <div>
            <p className="text-[12px] font-extrabold text-[#b3aac9]">
            From
            {oldPrice && (
                <>
                <span className="line-through px-1">€{oldPrice}</span>
                <span className="text-[#84e916]">{game.discount}%</span>
                </>
             )} 
            </p>
            

            <p className="text-[22px] font-extrabold pt-1 flex items-center gap-0.5">
                <span>{game.price} €</span>

                <span className="text-[#b3aac9]"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                </span>
              
               
           
            </p>

            <p className="text-[12px] font-extrabold text-[#84e916] pt-1">
              Cashback: {cashback} €
            </p>

            <div className="flex items-center gap-1 text-[12px] text-white/60 pt-1.25">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                {game.likes}
            </div>
          </div>
        </div>
      </div>
  );
}
