export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex justify-center items-center border-t-[1px] border-b-[1px] border-t-[#e2e7e9] border-b-[#e2e7e9] h-[60px]">
      {children}
    </header>
  );
}
