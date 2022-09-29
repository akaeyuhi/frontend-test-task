import * as test from "@testing-library/react";
import renderer from 'react-test-renderer';
import MainBody from './MainBody';
import cats from "../assets/cats.jpg";
import chubaka from "../assets/chubaka.jpg";
import {fireEvent} from "@testing-library/react";

;


it('Renders properly', () => {
    const component = renderer.create(
        <MainBody  image={cats}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Click invokes the func', () => {
    const images = [cats, chubaka];
    const clickHandler = jest.fn((event: MouseEvent) => {
        const newButtonColor = Math.floor(Math.random()*16777215).toString(16);
        const target = event.target as HTMLButtonElement;
        target.style.backgroundColor = '#' + newButtonColor;
        images.sort(() => Math.random() - 0.5);
    });
    test.render(<MainBody  image={images[0]} callback = {clickHandler}/>);
    expect(test.screen.getByRole('heading')).toBeInTheDocument();
    const button = test.screen.getByRole('button')
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalled();
});

