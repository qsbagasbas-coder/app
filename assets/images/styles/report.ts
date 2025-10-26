import { StyleSheet } from "react-native";

export const report= () => {
    return StyleSheet.create({

        container: {
            flex: 1,
            marginTop: 10,
            backgroundColor: '#F4F8FF',
        },

        scrollContainer: {
            flexGrow: 1,
            padding: 10,
        },

        arrow: {
            width: 30,
            height: 30, 
            marginLeft: 10,
            marginTop: 20,
        },

        headerText: {
            fontSize: 28,
            fontWeight: 'bold',
            width: '100%',
            color: 'black',
            marginLeft: 20,
            marginTop: 19,
        },

        line: {
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            width: "90%",
            alignSelf: "center",
            marginVertical: 15,
            marginTop: 25,
        },

        dropdown: {
            height: 30,
            width: "93%",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            marginBottom: 5,
            borderRadius: 5,
            marginVertical: 10,
            alignSelf: 'center'
        },

        textDesciptionContainer: {
            height: 250,
            width: '97%',
            borderRadius: 20,
            backgroundColor: '#FAF7F0',
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            marginLeft: 5,
            marginVertical: 10,
        },

        reportDescription: {
            fontSize: 17,
            fontWeight: '500',
            marginLeft: 15,
            marginVertical: 10,
        },

        reportDescriptionText: {
            marginLeft: 7,
            height: 200,
            width: '96%',
            borderRadius: 20,
            backgroundColor: 'white',
            paddingTop: 10,
            textAlignVertical:'top',
            borderWidth: 1,
            paddingLeft: 10,
            borderColor: "rgba(0,0,0,0.2)",
        },

        uploadImgContainer: {
            height: 200,
            width: '97%',
            borderRadius: 20,
            backgroundColor: '#FAF7F0',
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            marginLeft: 5,
            marginVertical: 10,
        },

        uploadImg: {
            marginLeft: 7,
            height: 150,
            width: '96%',
            borderRadius: 20,
            backgroundColor: 'white',
            paddingTop: 10,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
        },

        upload: {
            height: 90,
            width: 90,
            alignSelf: 'center',
        },

        clickUpload: {
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '500',
        },

 });
}  