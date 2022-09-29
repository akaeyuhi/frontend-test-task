import renderer from 'react-test-renderer';
import RightPanel from './RightPanel';
import cats from "./assets/cats.jpg";

it('Renders properly', () => {
    const component = renderer.create(
        <RightPanel  image={cats}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
