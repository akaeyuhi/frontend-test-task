import renderer from 'react-test-renderer';
import Header from './Header';
import cats from "./assets/cats.jpg";

it('Renders properly', () => {
    const component = renderer.create(
        <Header  image={cats}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
