export default function Plaza({activePlaza}: {activePlaza: string}) {
  return (
    <div className="basis-3/4 bg-gray-600 h-full rounded-2xl p-4 mr-8">
      <h1>{activePlaza}</h1>
    </div>
  )
}
