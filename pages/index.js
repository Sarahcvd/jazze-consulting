import About from '../src/components/About/About';
import Header from '../src/components/Header/header';
import Logos from '../src/components/Logos/Logos';
import Start from '../src/components/Start/Start';

export default function Home() {
  return (
    <>
      <Header />
      <Start />
      <Logos />
      <About />
    </>
  );
}
