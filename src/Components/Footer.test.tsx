import renderer from 'react-test-renderer';
import Footer from './Footer';
import cats from "./assets/cats.jpg";

it('Renders properly', () => {
    const component = renderer.create(
        <Footer  image={cats}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
