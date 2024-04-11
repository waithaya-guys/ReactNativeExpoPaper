import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import MyAppointment from '../screens/MyAppointment';
import NewsScr from '../screens/News';

import i18n from '../helper/I18n';

const BottomTabNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: i18n.t('home'), focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'myAppointment', title: i18n.t('appointment'), focusedIcon: 'calendar-month', unfocusedIcon: 'calendar-month-outline'},
    { key: 'news', title: i18n.t('news'), focusedIcon: 'bullhorn', unfocusedIcon: 'bullhorn-outline'},
    { key: 'profile', title: i18n.t('profile'), focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

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
    />
  );
};

export default BottomTabNav;