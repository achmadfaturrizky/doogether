import React from 'react';
import {StyleSheet} from 'react-native';

import fonts from '../../Components/config/fonts';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 25,
    color: '#000',
    fontFamily: fonts.medium,
  },
  contentDate: {
    backgroundColor: '#FAC600',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  textDateHeader: {
    fontFamily: fonts.medium,
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  cardHeaderModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    margin: 20,
  },
  titleCard: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: fonts.medium,
  },
  textDate: {
    fontFamily: fonts.book,
    marginLeft: 10,
    marginTop: 10,
  },
  fab: {
    backgroundColor: '#FAC600',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  contentFab: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'flex-end',
    right: 10,
  },
  iconFab: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontFamily: fonts.medium,
    fontSize: 18,
    marginLeft: 20,
  },
  checkboxIconModal: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  checkboxCloseModal: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  modalDetailTextDesc: {
    fontFamily: fonts.book,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  modalDetailTextDate: {
    fontFamily: fonts.book,
    marginLeft: 20,
  },
  modalTitleDetail: {
    fontFamily: fonts.medium,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
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
    height: 35,
    borderWidth: 1,
    borderColor: '#C8CEC4',
  },
  inputDesc: {
    borderRadius: 5,
    width: '90%',
    height: 60,
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
  iconCheck: {
    width: 15,
    height: 15,
    marginRight: 10,
    marginTop: 10,
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
    height: 150,
  },
});
