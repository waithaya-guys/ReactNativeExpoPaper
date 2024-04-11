import { View, StyleSheet, Text } from 'react-native';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
    en: {
        home: 'Home',
        profile: 'Profile',
        settings: 'Settings',
        logout: 'Logout',
        albums: 'Albums',
        login: 'Login',
        register: 'Register',
        appointment: 'Appointment',
        news : 'News',
    },
    th: {
        home: 'หน้าหลัก',
        profile: 'ข้อมูลส่วนตัว',
        settings: 'ตั้งค่า',
        logout: 'ออกจากระบบ',
        albums: 'อัลบั้ม',
        login: 'เข้าสู่ระบบ',
        register: 'สมัครสมาชิก',
        appointment: 'นัดหมาย',
        news : 'ข่าวสาร',
    }
};

const i18n = new I18n(translations);
i18n.defaultLocale = "th";
i18n.locale = Localization.locale.search(/-|_/) !== -1 ? Localization.locale.slice(0, 2) : Localization.locale;
i18n.fallbacks = true;

console.log(Localization.locale)

export default i18n;