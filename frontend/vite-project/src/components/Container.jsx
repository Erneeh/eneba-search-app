export default function Container({ children, count }) {
  return (
    <div className="max-w-310 mx-auto px-5 py-8">
        <span className="text-[14px] tracking-wider">Results found:
            <span className="pl-2 font-semibold">{count}</span>
        </span> 
        {children}
    </div>
  );
}