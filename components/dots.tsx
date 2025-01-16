export default function Dots() {
  return (
    <div>
      <div className="absolute top-24 right-20 h-48 w-48 bg-[url('/dots.svg')] bg-repeat opacity-70 pointer-events-none" />
      <div className="absolute bottom-14 left-16 h-48 w-48 bg-[url('/dots.svg')] bg-repeat opacity-70 pointer-events-none" />
    </div>
  );
}
