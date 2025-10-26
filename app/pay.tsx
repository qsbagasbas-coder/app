import { FontAwesome } from "@expo/vector-icons";
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { track } from '../assets/images/styles/track';


export default function Categories() {
    const styles = track();
        return (

            <View style={styles.container}>

                <ScrollView style={styles.scrollContainer} contentContainerStyle={{paddingBottom:100}}>
                    <View style = {{flexDirection: 'row',}}>

                        <TouchableOpacity onPress={() => router.push('/homepage')}>
                            <Image source={require('./../assets/images/arrow.png')}
                            style = {styles.arrow}/>
                        </TouchableOpacity>

                        <Text style = {styles.headerText}>To Pay</Text>
                
                    </View>

                    <View style={styles.line}/>

                    <TouchableOpacity style = {styles.productContainer}>
                        <Image source={require('./../assets/images/posa.jpg')}
                            style = {styles.prodImg}/>

                        <View style = {styles.prodDet}>
                            <Text style = {styles.prodName}>Posang Naka Pakyu</Text>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <View style = {{flexDirection: 'row',}}>
                                <FontAwesome
                                    name={"circle"}
                                    size={13}
                                    color= "#91CAFF"
                                    style={{ marginTop: 40,}}
                                />
                                
                                <Text style = {{marginLeft: 5, fontSize: 10, marginTop: 40, }}>Placed</Text>


                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.productContainer}>
                        <Image source={require('./../assets/images/posa.jpg')}
                            style = {styles.prodImg}/>

                        <View style = {styles.prodDet}>
                            <Text style = {styles.prodName}>Posang Naka Pakyu</Text>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <View style = {{flexDirection: 'row',}}>
                                <FontAwesome
                                    name={"circle"}
                                    size={13}
                                    color= "#91CAFF"
                                    style={{ marginTop: 40,}}
                                />
                                
                                <Text style = {{marginLeft: 5, fontSize: 10, marginTop: 40, }}>Placed</Text>


                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.productContainer}>
                        <Image source={require('./../assets/images/posa.jpg')}
                            style = {styles.prodImg}/>

                        <View style = {styles.prodDet}>
                            <Text style = {styles.prodName}>Posang Naka Pakyu</Text>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <View style = {{flexDirection: 'row',}}>
                                <FontAwesome
                                    name={"circle"}
                                    size={13}
                                    color= "#91CAFF"
                                    style={{ marginTop: 40,}}
                                />
                                
                                <Text style = {{marginLeft: 5, fontSize: 10, marginTop: 40, }}>Placed</Text>


                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.productContainer}>
                        <Image source={require('./../assets/images/posa.jpg')}
                            style = {styles.prodImg}/>

                        <View style = {styles.prodDet}>
                            <Text style = {styles.prodName}>Posang Naka Pakyu</Text>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <View style = {{flexDirection: 'row',}}>
                                <FontAwesome
                                    name={"circle"}
                                    size={13}
                                    color= "#91CAFF"
                                    style={{ marginTop: 40,}}
                                />
                                
                                <Text style = {{marginLeft: 5, fontSize: 10, marginTop: 40, }}>Received</Text>


                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.productContainer}>
                        <Image source={require('./../assets/images/posa.jpg')}
                            style = {styles.prodImg}/>

                        <View style = {styles.prodDet}>
                            <Text style = {styles.prodName}>Posang Naka Pakyu</Text>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <View style = {{flexDirection: 'row',}}>
                                <FontAwesome
                                    name={"circle"}
                                    size={13}
                                    color= "#91CAFF"
                                    style={{ marginTop: 40,}}
                                />
                                
                                <Text style = {{marginLeft: 5, fontSize: 10, marginTop: 40, }}>Received</Text>


                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.productContainer}>
                        <Image source={require('./../assets/images/posa.jpg')}
                            style = {styles.prodImg}/>

                        <View style = {styles.prodDet}>
                            <Text style = {styles.prodName}>Posang Naka Pakyu</Text>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <View style = {{flexDirection: 'row',}}>
                                <FontAwesome
                                    name={"circle"}
                                    size={13}
                                    color= "#91CAFF"
                                    style={{ marginTop: 40,}}
                                />
                                
                                <Text style = {{marginLeft: 5, fontSize: 10, marginTop: 40, }}>Received</Text>


                            </View>
                        </View>

                    </TouchableOpacity>


                </ScrollView>

            </View>
        );
}