import renderer from 'react-test-renderer';
import LeftPanel from './LeftPanel';
import cats from "../assets/cats.jpg";

it('Renders properly', () => {
    const component = renderer.create(
        <LeftPanel  image={cats}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
