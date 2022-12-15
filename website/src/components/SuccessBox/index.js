import React from 'react';
//import useThemeContext from '@theme/hooks/useThemeContext';
import {
  useThemeConfig,
  useColorMode,
  useHideableNavbar,
  useLockBodyScroll,
  useWindowSize,
} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const SuccessBox = ({children}) => {
  const {isDarkTheme} = useThemeConfig();
  return <div className={`${isDarkTheme ? styles.successBoxDark : styles.successBoxLight}`}>{children}</div>;
};

export default SuccessBox;
