import View from './style';
import Header from '../../components/header';

export default ({ children }) => (
  <div id="default-layout">
    <Header />
    <View>
      { children }
    </View>
  </div>
);
