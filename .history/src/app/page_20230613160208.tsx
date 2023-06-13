export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="four_zero_four_bg">
          <h1 className="text-center">404</h1>
        </div>
        <div className="contant_box_404">
          <h3 className="text-5xl">Look like you're lost</h3>
          <p>the page you are looking for is not available!</p>
          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </main>
  )
}
