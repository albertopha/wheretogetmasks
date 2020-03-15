import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


export default function SideBar() {
    return (
        <div className={styles.container}>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='slide out'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thin'
                >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='/images/wireframe/paragraph.png' />
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
};
