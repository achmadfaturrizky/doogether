import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const imageNews = require('../../assets/news2.jpg');
const imageNews2 = require('../../assets/news.jpg');

class News extends Component {
  state = {
    dataNews: [],
    title: '',
    body: '',
    inputContainer: false,
    isLoading: false,
    modalVisible: false,
  };

  componentDidMount = async () => {
    await this.getData();
  };

  getData = async () => {
    if ((await AsyncStorage.getItem('@data_news')) === null) {
      await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log(res.data);
          const data = res.data;
          this.setState({dataNews: data});
        });
      await AsyncStorage.setItem(
        '@data_news',
        JSON.stringify(this.state.dataNews),
      );
      const data2 = await AsyncStorage.getItem('@data_news');
      this.setState({
        dataNews: JSON.parse(data2),
      });
    } else {
      const dataNews2 = await AsyncStorage.getItem('@data_news');
      this.setState({dataNews: JSON.parse(dataNews2)});
    }
  };

  postData = async () => {
    const {title, body, dataNews} = this.state;
    const data = {
      userId: 1,
      id: new Date().getTime(),
      title,
      body,
    };

    await dataNews.push(data);
    await dataNews.sort((a, b) => {
      return b.id - a.id;
    });
    AsyncStorage.setItem('@data_news', JSON.stringify(dataNews));
    this.forceUpdate();
  };

  handlePost = async () => {
    const {title, body} = this.state;
    if (title === '' && body === '') {
      return ToastAndroid.showWithGravity(
        'Title must be filled!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (body === '') {
      return ToastAndroid.showWithGravity(
        'Body must be filled!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      this.setState({isLoading: true});
      setTimeout(async () => {
        await this.postData();
        await this.setState({
          inputContainer: false,
        });
        this.setState({isLoading: false});
        ToastAndroid.showWithGravity(
          'News Data has been inserted',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        this.setModalVisible(!this.state.modalVisible);
      }, 3000);
    }
  };

  _keyExtractor = item => item.id.toString();

  renderItem = ({item}) => (
    <TouchableOpacity style={styles.containerNews}>
      <Image style={styles.imageNews} source={imageNews2} />
      <View style={styles.contentNews}>
        <Text style={styles.titleNews} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.descriptionNews} numberOfLines={2}>
          {item.body}
        </Text>
      </View>
    </TouchableOpacity>
  );

  emptyData = () => (
    <View style={styles.containerEmpty}>
      <Image
        style={styles.imageEmpty}
        source={require('../../assets/emptyNews.png')}
      />
      <Text style={styles.textEmpty}>There is no recent news</Text>
    </View>
  );

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {dataNews, isLoading} = this.state;
    console.log(dataNews);
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={styles.imageBackgroundStyle}
          source={imageNews}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.buttonBack}>
            <Image
              resizeMode={'stretch'}
              style={styles.iconBack}
              source={require('../../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <View style={styles.containerBackground}>
            <Text style={styles.titleBackground}>Ini Berita Masa Kini</Text>
            <Text>
              est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
              beatae ea dolores neque\nfugiat est rerum tempore vitae\nsequi
              sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.containerTitle}>
          <View>
            <Text style={styles.titleContentNews}>Latest News</Text>
            <View style={styles.hr} />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
            style={styles.buttonPlus}>
            <Image
              style={styles.iconBack}
              source={require('../../assets/icon/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={dataNews}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            ListEmptyComponent={this.emptyData()}
          />
        </View>
        <Modal
          visible={this.state.modalVisible}
          backdropColor="transparent"
          transparent={true}
          style={styles.modalWindow}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.containerInput}>
                <Text style={styles.modalTitle}>Add News</Text>
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
                        body: value,
                      })
                    }
                    multiline={true}
                    numberOfLines={8}
                    placeholder="Body"
                    style={styles.inputDesc}
                  />
                </View>
                {isLoading === true ? (
                  <ActivityIndicator
                    style={styles.loading}
                    size="large"
                    color="#FAC600"
                  />
                ) : (
                  <View style={styles.containerButton}>
                    <TouchableOpacity
                      onPress={() => this.handlePost()}
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
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default News;
