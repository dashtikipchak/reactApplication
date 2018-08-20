import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({children}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};

const styles ={
    buttonStyle: {
        alignSelf: 'center',
        height:40,
        width: '30%',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'#ff8351',
        marginLeft:5,
        marginRight:5,
        marginTop: 30
    },
    textStyle: {
        alignSelf:'center',
        paddingBottom: 10,
        paddingTop: 10
    }
};

export default Button;