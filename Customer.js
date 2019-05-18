import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Accordion, Button, List} from 'antd-mobile-rn';

class Customer extends React.Component<any, any>{
    constructor() {
        super(...arguments);
        this.state = {
            activeSections: [2, 0],
        };
        this.onChange = activeSections => {
            this.setState({ activeSections });
        };
    }
//     style={{ flex: 1 }}
// style={{ marginTop: 80, marginBottom: 10 }}
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button>新增用户</Button>
                <Accordion
                    onChange={this.onChange}
                    activeSections={this.state.activeSections}
                >
                    <Accordion.Panel header="深圳市汇源肾宝有限公司">
                        {/*<List>*/}
                            {/*<List.Item>联系人：刘德华</List.Item>*/}
                            {/*<List.Item>联系电话：13760271597</List.Item>*/}
                           {/*<List.Item>公司地址：深圳是南山区桃园路147号南景苑21G</List.Item>*/}
                        {/*</List>*/}

                        联系人：刘德华
                        联系电话：13760271597
                        公司地址：深圳是南山区桃园路147号南景苑21G
                    </Accordion.Panel>
                    <Accordion.Panel header="广州市天河区南塘路333号采光广场大厦B座123">
                        {/*<List>*/}
                            {/*<List.Item>联系人：刘德华</List.Item>*/}
                            {/*<List.Item>联系电话：13760271597</List.Item>*/}
                            {/*<List.Item>公司地址：深圳是南山区桃园路147号南景苑21G</List.Item>*/}
                        {/*</List>*/}
                        {/*this is panel content2 or other*/}
                        联系人：刘德华
                        联系电话：13760271597
                        公司地址：深圳是南山区桃园路147号南景苑21G
                    </Accordion.Panel>
                    <Accordion.Panel header="北京市中日友好医院">
                        联系人：刘德华
                        联系电话：13760271597
                        公司地址：深圳是南山区桃园路147号南景苑21G


                    </Accordion.Panel>
                </Accordion>
            </View>
        );
    }

}

export default Customer;