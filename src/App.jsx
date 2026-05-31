import Header from "./Layouts/Header";
import Hero from "./Layouts/Hero";
import Video from "./Layouts/Video";
import Image from "./Layouts/Image";
import Table from "./Layouts/Table";
import Form from "./Layouts/Form";
import Footer from "./Layouts/Footer";


function App() {

  return (
    <>
      <Header />
      <main className="site-main">
        <Hero />
        <Video />
        <Image />
        <Table />
        <Form />
      </main>
      <footer className="site-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
