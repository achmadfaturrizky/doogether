import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import fonts from '../../Components/config/fonts';

const imageNews = require('../../assets/news2.jpg');
const imageNews2 = require('../../assets/news.jpg');

class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={{justifyContent: 'center'}}
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
          <TouchableOpacity style={styles.buttonAdd}>
            <Image
              style={styles.iconBack}
              source={require('../../assets/icon/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.containerNews}>
            <Image style={styles.imageNews} source={imageNews2} />
            <View style={styles.contentNews}>
              <Text style={styles.titleNews}>Ini Berita</Text>
              <Text style={styles.descriptionNews}>
                ya ini berita tentang lucinta luna yang tertangkap narkoboy
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.containerNews}>
            <Image style={styles.imageNews} source={imageNews2} />
            <View style={styles.contentNews}>
              <Text style={styles.titleNews}>Ini Berita</Text>
              <Text style={styles.descriptionNews}>
                ya ini berita tentang lucinta luna yang tertangkap narkoboy
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
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
    backgroundColor: '#F24463',
    width: 100,
    height: 5,
    marginLeft: 20,
    marginTop: 5,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAdd: {
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
    fontSize: 16,
  },
  contentNews: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center',
  },
  descriptionNews: {
    fontFamily: fonts.book,
    width: 250,
  },
});
