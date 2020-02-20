import React from 'react';
import {StyleSheet} from 'react-native';

import fonts from '../../Components/config/fonts';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
  },
  imageBackgroundStyle: {
    justifyContent: 'center',
  },
  containerBackground: {
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  titleBackground: {
    fontFamily: fonts.bold,
    fontSize: 25,
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
  titleContentNews: {
    marginTop: 20,
    fontFamily: fonts.bold,
    fontSize: 18,
    marginLeft: 20,
  },
  hr: {
    backgroundColor: '#FAC600',
    width: 100,
    height: 5,
    marginLeft: 20,
    marginTop: 5,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPlus: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  containerNews: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  imageNews: {
    width: 110,
    height: 70,
    borderRadius: 10,
  },
  titleNews: {
    fontFamily: fonts.medium,
    width: 230,
    fontSize: 16,
  },
  contentNews: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center',
  },
  descriptionNews: {
    fontFamily: fonts.book,
    width: 230,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  containerInput: {
    marginTop: 20,
    marginBottom: 20,
  },
  contentInput: {
    marginTop: 10,
    marginLeft: 20,
  },
  textInput: {
    marginBottom: 15,
    borderRadius: 5,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#C8CEC4',
  },
  modalTitle: {
    fontFamily: fonts.medium,
    fontSize: 18,
    marginLeft: 20,
  },
  inputDesc: {
    borderRadius: 5,
    width: '90%',
    height: 80,
    borderWidth: 1,
    borderColor: '#C8CEC4',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  buttonAdd: {
    backgroundColor: '#FAC600',
    width: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonAdd: {
    color: '#fff',
    fontFamily: fonts.medium,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonCancel: {
    borderColor: '#FAC600',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonCancel: {
    color: '#FAC600',
    fontFamily: fonts.medium,
    marginTop: 10,
    marginBottom: 10,
  },
  loading: {
    marginTop: 20,
  },
  containerEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textEmpty: {
    fontFamily: fonts.medium,
    fontSize: 17,
    marginTop: 20,
  },
  imageEmpty: {
    width: 300,
    height: 200,
  },
});
