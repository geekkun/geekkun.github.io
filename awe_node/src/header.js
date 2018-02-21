import React, { Component } from 'react';
import './header.css';
import logo from './logo_compress.png';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Account from 'material-ui-icons/AccountCircle';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Me from './me.jpg'

const styles = {
    row: {
        display: 'inline',
        justifyContent: 'center',
    },
    avatar: {
        display: 'inline',
        margin: 10,
    },
    bigAvatar: {
        width: 40,
        height: 40,
    },
};

// function ImageAvatars(props) {
//     const { classes } = props;
//     return (
//         <div>
//             <Avatar alt="Remy Sharp" src={Me} className={styles.avatar} />
//         </div>
//     );
// }

class Header extends Component{



    render() {
        const font_size = "40px";
        return (

                <header className="App-header">
                    <a href="#">
                        <img src={logo} className="App-logo" alt="AweTrip" />
                    </a>
                    <ul className="header-menu">
                        {/*<li><a href="#"><Avatar alt="Remy Sharp" src={Me}  /></a> </li>*/}
                        {/*<li><a href="#"><Icon style={{ fontSize: font_size }}>person_add</Icon> </a> </li>*/}
                        {/*<li><a href="#"><Icon style={{ fontSize: font_size }}>assignment_ind</Icon> </a> </li>*/}
                        <li><a href="#"><Icon style={{ fontSize: font_size }}>add_location</Icon> </a> </li>
                        <li><a href="#"><Icon style={{ fontSize: font_size }}>group</Icon> </a> </li>
                        <li><a href="#"><Icon style={{ fontSize: font_size }}>public</Icon> </a> </li>
                        {/*<li><a href="#"><Icon style={{ fontSize: font_size }}>whatshot</Icon> </a> </li>*/}
                        {/*<li><a href="#"><Icon style={{ fontSize: font_size }}>mode_comment</Icon> </a> </li>*/}
                        {/*<li><a href="#"><Icon style={{ fontSize: font_size }}>mode_edit</Icon> </a> </li>*/}

                        <li><a href="#"><Icon style={{ fontSize: font_size }}>person</Icon> </a> </li>
                        <li><a href="#"><Icon style={{ fontSize: font_size }}>add</Icon> </a> </li>
                        {/*<li><a href="#"><Icon style={{ fontSize: font_size }}>create</Icon> </a> </li>*/}
                        <li><a href="#"><Icon style={{ fontSize: font_size }}>settings</Icon> </a> </li>


                    </ul>
                </header>
        )
    }
}

export default Header;