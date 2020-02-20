import React from 'react';
import {StyleSheet} from 'react-native';

import fonts from '../../Components/config/fonts';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonBack: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  iconBack: {
    width: 15,
    height: 15,
  },
  marker: {
    height: 50,
    width: 50,
  },
  bubble: {
    borderRadius: 10,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  footer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    flexDirection: 'row',
  },
  title: {
    fontFamily: fonts.book,
    fontSize: 13,
  },
  textContentFooter: {
    fontFamily: fonts.book,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  contentFooter: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  textName: {
    fontFamily: fonts.bold,
    fontSize: 17,
  },
  contentFooterBottom: {
    marginTop: 5,
  },
});
