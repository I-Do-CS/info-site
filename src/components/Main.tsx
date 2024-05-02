export default function MainContent() {
  return (
    <main className=" min-h-screen bg-zinc-800 pt-[8rem] text-white">
      <div className="container mx-auto px-10">
        <h1 className="text-5xl font-semibold tracking-tight">
          Fun facts about React
        </h1>
        <ul className="list-disc space-y-3 pl-16 pt-10 text-lg [&>li]:max-w-[40ch] [&>li]:marker:text-4xl [&>li]:marker:text-[#7ad8fe]">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
}
