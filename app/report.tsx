import { router } from 'expo-router';
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { report } from '../assets/images/styles/report';

export default function Product() {
    const styles = report();
        const [value, setValue] = useState(null);

        const data = [
            { label: "Scam", value: "Scam" },
            { label: "Intellectual Property", value: "Intellectual Property" },
            { label: "False/Inaccurate Information", value: "False/Inaccurate Information" },
            { label: "Redirecting Purchase Outside Platform", value: "Redirecting Purchase Outside Platform" },
            { label: "Others (Please Specify On Your Report)", value: "Others (Please Specify On Your Report)" },
        ];
            return (

                <View style = {styles.container}>

                    
                    <ScrollView style={styles.scrollContainer} contentContainerStyle={{paddingBottom:100}}>
                        
                        <View style = {{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => router.back()} style = {{flexDirection:'row'}}>
                                <Image source={require('./../assets/images/arrow.png')}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>

                            <Text style = {styles.headerText}>Report</Text>

                        </View>

                        <View style={styles.line}/>

                        <Text style = {{marginLeft: 10, fontWeight: '600', fontSize: 20,}}>Select Reason</Text>

                        <Dropdown
                            style = {styles.dropdown}
                            data={data}
                            labelField="label"
                            valueField="value"
                            placeholder="Select"
                            value={value}
                            onChange={(item) => setValue(item.value)}
                        />

                        <View style = {styles.textDesciptionContainer}>

                            <Text style = {styles.reportDescription}>Report Description*</Text>

                            <TextInput style={styles.reportDescriptionText}
                                autoCapitalize="none"
                                placeholder="Please elaborate your selected reason"
                                placeholderTextColor="black"
                                multiline={true}
                            /> 

                        </View>

                        <View style = {styles.uploadImgContainer}>

                            <Text style = {styles.reportDescription}>Upload Evidence*</Text>

                            <View style = {styles.uploadImg}>
                                <TouchableOpacity>
                                    <Image source={require('./../assets/images/upload.png')}
                                        style={styles.upload}
                                    />
                                    <Text style = {styles.clickUpload}>Click here to upload </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>

                </View>
 );
}