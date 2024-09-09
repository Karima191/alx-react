import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // Adapter for React 18
import { createSerializer } from 'enzyme-to-json';

// Configure Enzyme with the React adapter
configure({ adapter: new Adapter() });

// Add snapshot serializer for enzyme
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

