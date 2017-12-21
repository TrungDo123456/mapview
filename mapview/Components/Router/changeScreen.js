
import {StackNavigator} from 'react-navigation'
import Detail_Map from '../src/Detail_map';
import DemoMapView from '../src/mapview';

const ChangeScreen = StackNavigator({
    Map:{
        screen:DemoMapView,
        navigationOptions: { header: null }
    },
    Detail:{
        screen:Detail_Map,
        navigationOptions: { header: null }
    }
});

export default ChangeScreen;