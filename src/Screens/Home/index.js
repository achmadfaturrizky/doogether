import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Modal,
  TextInput,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      modalVisible: false,
      modalVisibleDetail: false,
      title: '',
      description: '',
      done: false,
      todoList: [],
      todoList2: [],
      detailData: '',
    };
    this.getData();
  }

  getDate = str => {
    const splitString = str.split('-');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('-');
    return joinArray;
  };

  detailData = (detailData, modalVisibleDetail) => {
    this.setState({detailData, modalVisibleDetail});
  };

  _keyExtractor = item => item.id.toString();

  renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => this.detailData(item, true)}>
        <View style={styles.cardHeader}>
          <Text style={styles.textDate}>
            {this.getDate(item.date.slice(0, 10))}
          </Text>
          <TouchableOpacity onPress={() => this.removeData(item)}>
            <Image
              style={styles.iconCheck}
              source={require('../../assets/icon/checkbox.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleCard}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  emptyData = () => (
    <View style={styles.containerEmpty}>
      <Image
        style={styles.imageEmpty}
        source={require('../../assets/empty.png')}
      />
      <Text style={styles.textEmpty}>
        There are no task, please make it first
      </Text>
    </View>
  );

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setModalDetailVisible(modalVisibleDetail) {
    this.setState({modalVisibleDetail});
  }
  inputData = async () => {
    const {title, description, modalVisible} = this.state;
    const data = [
      {
        title,
        description,
        date: new Date(new Date().getTime()),
        id: new Date().getTime(),
        done: false,
      },
    ];
    if ((await AsyncStorage.getItem('@todo_list')) == null) {
      if (title === '') {
        return ToastAndroid.showWithGravity(
          'Title must be filled!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else if (description === '') {
        return ToastAndroid.showWithGravity(
          'Description must be filled!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      ToastAndroid.showWithGravity(
        'Task successfully added',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      AsyncStorage.setItem('@todo_list', JSON.stringify(data));
      this.getTodo();
    } else {
      if (title === '') {
        return ToastAndroid.showWithGravity(
          'Title must be filled!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else if (description === '') {
        return ToastAndroid.showWithGravity(
          'Description must be filled!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      ToastAndroid.showWithGravity(
        'Task successfully added',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      const list = await AsyncStorage.getItem('@todo_list');
      this.state.todoList = list;
      const y = JSON.parse(this.state.todoList);
      await y.push(data[0]);
      AsyncStorage.setItem('@todo_list', JSON.stringify(y));
      await this.getData();
      this.setModalVisible(!modalVisible);
    }
  };
  removeDataModal = async item => {
    const {todoList2, modalVisibleDetail} = this.state;
    item.done = !item.done;
    await this.forceUpdate();
    await this.filterRemove(item);
    let checked = Array.from(new Set(todoList2));
    let checked2 = [];
    checked.filter(data => {
      data.done === false ? checked2.push(item) : null;
    });
    checked2.length !== checked.length
      ? this.setState({done: true})
      : this.setState({done: false});
    await this.removeSuccess();
    this.setModalDetailVisible(!modalVisibleDetail);
  };

  removeData = async item => {
    const {todoList2} = this.state;
    item.done = !item.done;
    await this.forceUpdate();
    await this.filterRemove(item);
    let checked = Array.from(new Set(todoList2));
    let checked2 = [];
    checked.filter(data => {
      data.done === false ? checked2.push(item) : null;
    });
    checked2.length !== checked.length
      ? this.setState({done: true})
      : this.setState({done: false});
    this.removeSuccess();
  };

  filterRemove = async item => {
    const {todoList2} = this.state;
    if (item.done) {
      todoList2.push(item);
      todoList2.filter(data => {
        if (item.id === data.id) {
          return -1;
        } else {
          if (!item.done) {
            return 1;
          }
        }
      });
    }
  };

  getData = async () => {
    const list = await AsyncStorage.getItem('@todo_list');
    const data = JSON.parse(list);
    await this.setState({todoList: data});
  };

  removeSuccess = async () => {
    const {todoList, todoList2} = this.state;
    const x = [];
    const y = [];
    let todoArr = [...todoList2];
    let todoArr2 = [...todoList];

    await todoArr.map(status => {
      status.done ? x.push(status) : null;
    });

    await todoArr2.map(status => {
      x.map(data => {
        status.done !== data.done ? y.push(status) : null;
      });
    });
    await AsyncStorage.setItem(
      '@todo_list',
      JSON.stringify(Array.from(new Set(y))),
    );
    this.getData();
    this.forceUpdate();
    this.setState({done: false});
    ToastAndroid.showWithGravity(
      'Completed',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  render() {
    const dateNow = new Date().toDateString();
    const {modalVisibleDetail, detailData} = this.state;
    const {title, description, date} = this.state.detailData;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.contentTitle}>Todo List</Text>
          <View style={styles.contentDate}>
            <Text style={styles.textDateHeader}>{dateNow}</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <FlatList
              numColumns={2}
              data={this.state.todoList}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderItem}
              ListEmptyComponent={this.emptyData()}
            />
          </View>
        </ScrollView>
        <View style={styles.contentFab}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
            style={styles.fab}>
            <Image
              style={styles.iconFab}
              source={require('../../assets/icon/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.modalVisible}
          backdropColor="transparent"
          transparent={true}
          style={styles.modalWindow}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.containerInput}>
                <Text style={styles.modalTitle}>Add Data</Text>
                <View style={styles.contentInput}>
                  <TextInput
                    onChangeText={value =>
                      this.setState({
                        title: value,
                      })
                    }
                    placeholder="Title"
                    style={styles.textInput}
                  />
                  <TextInput
                    onChangeText={value =>
                      this.setState({
                        description: value,
                      })
                    }
                    multiline={true}
                    numberOfLines={8}
                    placeholder="Description"
                    style={styles.inputDesc}
                  />
                </View>
                <View style={styles.containerButton}>
                  <TouchableOpacity
                    onPress={this.inputData}
                    style={styles.buttonAdd}>
                    <Text style={styles.textButtonAdd}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={styles.textButtonCancel}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={modalVisibleDetail}
          backdropColor="transparent"
          transparent={true}
          style={styles.modalWindow}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.cardHeaderModal}>
                <TouchableOpacity
                  onPress={() => this.removeDataModal(detailData)}>
                  <Image
                    style={styles.checkboxIconModal}
                    source={require('../../assets/icon/checkbox.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalDetailVisible(!modalVisibleDetail);
                  }}>
                  <Image
                    style={styles.checkboxCloseModal}
                    source={require('../../assets/icon/close.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalTitleDetail}>{title}</Text>
              <Text style={styles.modalDetailTextDate}>
                {modalVisibleDetail === false
                  ? date
                  : this.getDate(date.slice(0, 10))}
              </Text>
              <Text style={styles.modalDetailTextDesc}>{description}</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Home;
