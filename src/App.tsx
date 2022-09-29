import React, {useCallback, useState} from 'react';
import Header from './Components/Header';
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import Footer from "./Components/Footer";
import MainBody from "./Components/MainBody";
import cats from "./assets/cats.jpg";
import chubaka from "./assets/chubaka.jpg";
import dogs from "./assets/dogs.jpg";
import dyno from "./assets/dyno.jpg";
import planets from "./assets/planets.jpg";

function App() {
   const initialImages: any[] = [cats, chubaka, dogs, dyno, planets];
   const [images, setImages] = useState(initialImages);

    const clickHandler = useCallback((event: MouseEvent) => {
        const newButtonColor = Math.floor(Math.random()*16777215).toString(16);
        const target = event.target as HTMLButtonElement;
        target.style.backgroundColor = '#' + newButtonColor;
        images.sort(() => Math.random() - 0.5);
        const newImages = [...images];
        setImages(newImages);
    }, [images]);
  return (
    <div className="App">
        <Header image={images[0]}/>
        <div className="main">
          <LeftPanel image={images[1]} />
          <MainBody callback={clickHandler} image={images[2]} />
          <RightPanel image={images[3]}/>
        </div>
      <Footer image={images[4]} />
    </div>
  );
}

export default App;
