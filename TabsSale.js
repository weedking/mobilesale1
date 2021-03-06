import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tabs,WhiteSpace, } from 'antd-mobile-rn';
import Customer from "./Customer";


const renderContent = (tab, index) => {
    const style = {
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#ddd',
    };
    const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        return (
            <View key={`${index}_${i}`} style={style}>
                <Text>
                    {tab.title} - {i}
                </Text>
            </View>
        );
    });
    return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};

export  class TabsSale extends React.Component {
    render() {
        const tabs = [
            { title: '客户信息' },
            { title: '销售简报' },
            { title: '数据看板' },
            { title: 'CRM通知' },
        ];
        const tabs2 = [
            { title: '1st Tab' },
            { title: '2nd Tab' },
            { title: '3rd Tab' },
            { title: '4th Tab' },
            { title: '5th Tab' },
            { title: '6th Tab' },
            { title: '7th Tab' },
            { title: '8th Tab' },
            { title: '9th Tab' },
        ];
        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#fff',
        };
        return (
            <View style={{ flex: 1 }}>
                <WhiteSpace />
                <Tabs tabs={tabs}>
                    <View style={style}>
                        {/*<Text>客户信息1sdagdfgdfgsdfgdfgadfgafgasgasgasgasgafgafgafsgasgafgafsgafsgf</Text>*/}
                        <Customer/>
                    </View>
                    <View style={style}>
                        <Text>销售简报</Text>
                    </View>
                    <View style={style}>
                        <Text>数据看板</Text>
                    </View>
                    <View style={style}>
                        <Text>CRM通知</Text>
                    </View>
                </Tabs>

                {/*<View style={{ flex: 3 }}>*/}
                    {/*<Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">*/}
                        {/*{renderContent}*/}
                    {/*</Tabs>*/}
                {/*</View>*/}

            </View>
        );
    }
}
export const title = 'Tabs';
export const description = 'Tabs example';

export default TabsSale;