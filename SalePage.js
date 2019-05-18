import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon, SearchBar, TabBar, WhiteSpace, Grid } from 'antd-mobile-rn';
import Customer from './Customer';


const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `Name${i}`,
}));

const data1 = [{
    icon: '../mobilesale1/img/customer.png',
    text: '客户',
    index: 1
},
    {
        icon: '../mobilesale1/img/remind.png',
        text: '提醒',
        index: 2
    }];


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}



class SalePage extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            selectedTab: 'redTab',
            tin:"sss",
            date: new Date(),//当前时间

        };
        // this.handleClick = this.handleClick.bind(this)
        // this.showcustomer=this.showcustomer.bind(this);
        // this.kk=this.kk.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handClick=this.handClick.bind(this);
    }

    handleAdd = (index) => {
        return <h1>nihao{index}</h1>
        // alert(index)
    }

    handClick=()=>{
        // const w=window.open('about:blank');
        // w.location.href="./Customer"
        return <h1>Hello</h1>;

    }

    render() {


        return (
            <ScrollView>
                {/*<View style={[{ margin: 10 }]}>*/}
                {/*<Text>Simple</Text>*/}
                {/*</View>*/}
                {/*<View style={[{ padding: 10 }]}>*/}
                {/*<Grid data={data} hasLine={false} />*/}
                {/*</View>*/}

                {/*<View style={[{ margin: 10 }]}>*/}
                    {/*<Text onPress={()=>alert(123)}>Carousel</Text>*/}
                {/*</View>*/}
                {/*<Grid*/}
                    {/*data={data}*/}
                    {/*columnNum={3}*/}
                    {/*isCarousel*/}
                    {/*// onPress={(_el: any, index: any) => alert(index)}*/}
                    {/*onClick={() => alert(456)}*/}
                {/*/>*/}

                <View style={[{ margin: 10 }]}>
                    <Text>销售首页</Text>
                </View>
                <Grid
                    data={data1}
                    columnNum={3}
                    isCarousel
                    onClick={(_el: any, index: any) => alert(index)}
                    // onClick={(_el: any, index: any) => tt(index)}
                    // onClick={(_el: any, index: any) => this.handleAdd.bind(index)}
                    // itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
                />
                {/*<div className={!!this.state.bottonshow}> {Customer}</div>*/}

                {/*<Customer />*/}
                {/*<Greeting isLoggedIn={false} />*/}

                {/*<UserGreeting/>*/}

                <Button onClick={this.handClick.bind(this)}>antd-mobile-rnbutton</Button>



            </ScrollView >

        );
    }

}



export default SalePage;