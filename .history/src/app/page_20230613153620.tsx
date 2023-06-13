export default function Home() {
  return (
    <section className="page_404 w-full h-screen">
      <div className="container w-full h-screen">
        <div className="flex items-center justify-center w-full h-screen">
          <div className="w-10/12 text-center">
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
        </div>
      </div>
    </section>
  )
}
