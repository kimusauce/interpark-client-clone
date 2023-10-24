import Header from "./Header";

function App() {
  return (
    // react inline stylesheet method
    // <div className="example" style={{color : red}}></div>;
    <div className="wrapper">
      <Header />
      {/* <!-- section area --> */}
      <div className="content"></div>
      {/* <!-- footer area --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
