export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex mx-auto mt-7 h-full w-full bg-white">{children}</div>
  );
}
