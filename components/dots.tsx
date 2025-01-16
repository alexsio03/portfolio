export default function Dots() {
  return (
    <div className="z-0">
      <div className="absolute top-16 right-12 h-80 w-80 bg-[url('/dots.svg')] bg-repeat opacity-80 pointer-events-none" />
      <div className="absolute top-32 right-28 h-80 w-80 bg-[url('/dots.svg')] bg-repeat opacity-90 pointer-events-none" />
      <div className="absolute bottom-16 left-16 h-80 w-80 bg-[url('/dots.svg')] bg-repeat opacity-90 pointer-events-none" />
      <div className="absolute bottom-40 left-40 h-80 w-80 bg-[url('/dots.svg')] bg-repeat opacity-80 pointer-events-none" />
    </div>
  );
}
