import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {Button, Modal, WhiteSpace, WingBlank, Toast, Provider,} from 'antd-mobile-rn';

export class AddCustomer extends React.Component{
    constructor(props){
        super(props);
        this.onButtonClick5 = () => {
            Modal.prompt(
                '客户信息录入',
                '请确认',
                password => console.log(`password: ${password}`),
                'default',
                null,
                ['公司名称']

            );
        };

        this.state = {
            visible: false,
            visible1: false,
            visible2: false,
        };
    }

    render(){
        const footerButtons = [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') },
        ];
        return(
            <ScrollView style={{ marginTop: 20 }}>
                <WingBlank>
                    <Button onClick={this.onButtonClick5}>输入信息</Button>
                </WingBlank>

            </ScrollView>
        );

    }



}
export default AddCustomer;