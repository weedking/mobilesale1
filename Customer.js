import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon, SearchBar, TabBar, WhiteSpace, Grid } from 'antd-mobile-rn';

class Customer extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            bottonshow: false
        };
        // this.handleClick = this.handleClick.bind(this)
        // this.showcustomer=this.showcustomer.bind(this);
        // this.kk=this.kk.bind(this);
    }


    render() {
        return (
            <ScrollView>

                <View style={[{ margin: 10 }]}>
                    <Text>新加的</Text>
                </View>

            </ScrollView>
        );
    }

}

export default Customer;