import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { useIsFocused, RouteProp } from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import MyAppointment from '../screens/MyAppointment';
import NewsScr from '../screens/News';

import i18n from '../helper/I18n';


type Props = {
  route: RouteProp<any>;
};


const BottomTabNav = (props: Props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: i18n.t('home'), focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'myAppointment', title: i18n.t('appointment'), focusedIcon: 'calendar-month', unfocusedIcon: 'calendar-month-outline'},
    { key: 'news', title: i18n.t('news'), focusedIcon: 'bullhorn', unfocusedIcon: 'bullhorn-outline'},
    { key: 'profile', title: i18n.t('profile'), focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  console.log(props.route.name);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    myAppointment: MyAppointment,
    news: NewsScr,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // sceneAnimationEnabled="true"
      sceneAnimationType="shifting"
      onTabPress={(e) => { routes }}
    />
  );
};

export default BottomTabNav;