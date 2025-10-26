import { FontAwesome } from "@expo/vector-icons";
import { router } from 'expo-router';
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { product } from '../assets/images/styles/productStyle';




export default function Product() {
    const styles = product();
        const [value, setValue] = useState(null);

        const data = [
            { label: "Spicy 🍎", value: "Spicy" },
            { label: "Hot 🍌", value: "Hot" },
            { label: "Sezy 🍒", value: "Sezy" },
        ];
            return (

                <View style = {styles.container}>

                    
                    <ScrollView style={styles.scrollContainer} contentContainerStyle={{paddingBottom:100}}>

                        <TouchableOpacity onPress={() => router.push('/homepage')} style = {{flexDirection:'row'}}>
                            <Image source={require('./../assets/images/arrow.png')}
                                style={styles.arrow}
                            />

                            <TextInput style={styles.searchInput}
                                autoCapitalize="none"
                                placeholder="Search.."
                                placeholderTextColor="black"
                            /> 

                            <Image source={require('./../assets/images/cart.png')}
                            style={styles.cart}
                            />

                        </TouchableOpacity>

                        <View style = {styles.prodPicture}>
                            <Image source={require('./../assets/images/frozen.png')}
                            style={styles.prodImage}
                            />
                        </View>

                        <Text style = {styles.prodName}>Ice For Sale</Text>
                        <Dropdown
                            style = {styles.dropdown}
                            data={data}
                            labelField="label"
                            valueField="value"
                            placeholder="  Select"
                            value={value}
                            onChange={(item) => setValue(item.value)}
                        />

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {styles.prodPrice}>₱6969.69</Text>

                            <Text style = {styles.prodSold}>10k+ Sold</Text>
                        </View>

                        <View style={styles.line}/>

                        <View style = {styles.store}>
                            <Image source={require('./../assets/images/frozen.png')}
                            style={styles.storeImg}
                            />

                            <TouchableOpacity>
                                <Text style = {styles.storeName}>Frozen Store</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {{flexDirection: 'row'}}>
                                <Image source={require('./../assets/images/report.png')}
                                style={styles.reportImg}
                                />
                                <Text style = {styles.report}>Report...</Text>
                            </TouchableOpacity>

                        </View>

                        <Text style = {styles.description}>Description</Text>

                        <Text style = {styles.descText}>Let it go, let it go Can't hold it back anymore Let it go, let it go Turn away and slam the door I don't care what they're going to say Let the storm rage on The cold never bothered me anyway
                        </Text>

                        <View style = {styles.rateContainer}>
                            <View style = {{flexDirection: 'row',}}>
                                <Text style = {styles.reviewText}>Reviews</Text>
                                <TouchableOpacity>
                                <Text style = {styles.view}>View All ►</Text>
                                </TouchableOpacity>
                            </View>

                            <View style = {{marginTop:10,}}>
                                <View style = {{flexDirection:'row',}}>
                                    <Text style = {styles.rateName}>Totoy Jameimei</Text>

                                        <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 60,}}>
                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                        </View>
                                </View>
                            
                                <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                                <View style = {{flexDirection: 'row',}}>
                                    <Image source={require('./../assets/images/cassie.png')}
                                    style={styles.rateImg}
                                    />
                                    <Image source={require('./../assets/images/spag.jpg')}
                                    style={styles.rateImg}
                                    />
                                </View>
                            </View>

                            <View style={styles.rateLine}/>

                            <View style = {{flexDirection:'row',}}>
                                    <Text style = {styles.rateName}>Totoy Cassie</Text>
                                        
                                        <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 110,}}>
                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />

                                            <FontAwesome
                                                name={"star"}
                                                size={23}
                                                color= "#FFCD03"
                                                style={{ marginHorizontal: 2,}}
                                            />
                                        </View>
                            </View>

                            <Text style = {styles.rateDescription}>Anoh ba toh!! Ayoko netoh, napaka panget naman ng tinda nyo!!!</Text>

                        </View>
                        
                    </ScrollView>

                    <View style = {styles.footer}>
                        <TouchableOpacity style = {styles.minus}>
                            <Image source={require('./../assets/images/minus.png')}
                                    style={{height: 33, width: 33, marginLeft: 4, marginTop: 4}}
                                    />
                        </TouchableOpacity>

                            <Text style = {{fontSize: 23, fontWeight: '500', marginLeft: 10, marginTop: 25,}}>69</Text>
                            
                        <TouchableOpacity style = {styles.plus}>
                            <Image source={require('./../assets/images/plus.png')}
                                    style={{height: 27, width: 27, marginLeft: 6, marginTop: 6}}
                                    />
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.addtoCart}>
                            <Text style = {{fontSize: 23, fontWeight: '500', marginLeft: 35, marginTop: 5,}}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>

    );
}