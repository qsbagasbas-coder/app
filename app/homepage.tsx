import { router } from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { homepage } from '../assets/images/styles/style';

export default function Index() {

const styles = homepage();
    return (
        <View style = {styles.container}>

            <View style={styles.searchBar}>

                <TextInput style={styles.searchInput}
                    autoCapitalize="none"
                    placeholder="Search.."
                    placeholderTextColor="black"
                /> 

                <TouchableOpacity>
                    <Image source={require('./../assets/images/cart.png')}
                        style={styles.cart} 
                    />
                </TouchableOpacity>

            </View>

                <ScrollView contentContainerStyle={{paddingBottom:100}} style = {styles.scrollContainer}>
                    <View style = {styles.header}>
                        <Text style={styles.headText}>Accessible Online Orders</Text>
                        <Text style={styles.subheadText}>Mamamo blue.</Text>

                        <View style={styles.categoryContainer}>
                            <View style={styles.topCategories}/>
                            <View style={styles.topCategories}/>
                            <View style={styles.topCategories}/>
                        </View>

                    </View>

                    <View style={styles.line}/>

                    <Text style={styles.head}>My Purchases</Text>

                    <View style={styles.purchaseCont}>

                      <View style={styles.purchase}>

                          <TouchableOpacity>
                              <Image source={require('./../assets/images/wallet.png')}
                                style = {{width: 50, height: 50, marginLeft:23, marginTop:10}}/>
                              <Text style={{marginTop:15, marginLeft:23, fontWeight:'600'}}>To Pay</Text>
                          </TouchableOpacity> 

                          <TouchableOpacity>
                              <Image source={require('./../assets/images/ship.png')}
                                style = {{width: 55, height: 55, marginLeft:23, marginTop:10}}/>
                              <Text style={{marginTop:11, marginLeft:23, fontWeight:'600'}}>To Ship</Text>
                          </TouchableOpacity>

                          <TouchableOpacity>
                              <Image source={require('./../assets/images/received.png')}
                                style = {{width: 65, height: 65, marginLeft:23, marginTop:10}}/>
                              <Text style={{marginTop:1, marginLeft:23, fontWeight:'600'}}>To Receive</Text>
                          </TouchableOpacity> 

                          <TouchableOpacity>
                              <Image source={require('./../assets/images/rate.png')}
                                style = {{width: 53, height: 53, marginLeft:23, marginTop:10}}/>
                              <Text style={{marginTop:13, marginLeft:23, fontWeight:'600'}}>To Rate</Text>
                          </TouchableOpacity>

                      </View>

                    </View>

                    <Text style={styles.head}>For You</Text>

                    <View style={styles.forYou}>

                        <TouchableOpacity onPress={() => router.push('/product')} style={styles.card}>
                            <Image source={require('./../assets/images/coco.jpg')} style={styles.imgCard}/>
                              <Text style={styles.text}>Apple</Text>
                              <Text style={styles.price}>₱16.78</Text>

                            <View style={styles.cardInfo}>
                              <View style={styles.rate}>
                                  <Text style={styles.ratingNum}>★ 4.9</Text>
                              </View>
                                  <Text style={styles.soldNum}>1k+ sold</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            
          <View style={styles.footerContainer}> 

              <View style={styles.footer}>

                  <View>
                      <Image source={require('./../assets/images/home.png')}
                        style = {{height:35, width:35, marginLeft:6}}/>
                      <Text style={{marginTop:3, marginLeft:3, fontWeight:'500', color:"white"}}>Home</Text>
                  </View>

                  <View>

                     <TouchableOpacity onPress={() => router.push('/categories')}>
                        <Image source={require('./../assets/images/category.png')}
                          style = {{height:40, width:40, marginLeft:16}}/>
                        <Text style={{marginTop:0, marginLeft:3, fontWeight:'500', color:"white"}}>Category</Text>
                    </TouchableOpacity>
 
                  </View>

                  <TouchableOpacity>
                    <Image source={require('./../assets/images/profile.png')}
                      style = {{height:37, width:37, marginLeft:8}}/>
                    <Text style={{marginTop:3, marginLeft:3, fontWeight:'500', color:"white"}}>Profile</Text>
                  </TouchableOpacity>

              </View>

          </View>

        </View>
    );
}