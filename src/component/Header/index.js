import React from 'react';
import logo from "./img/logo.png"
export default class header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {classelemetn: true};
    }

    render(){
        return(
            <div >
            <div className="header">
                <div className={this.state.classelemetn ? 'container-fluid site-header':'container-fluid site-header scrol_headwr'} >
                    <div className="container">
                        <div className="site-branding col-md-4 col-sm-6 col-xs-12">
                            <a href="/" className="custom-logo-link">
                                <img width="200" height="69" src={logo} className="custom-logo"
                                     alt="Разработка и продвижение сайтов в Астане"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <div className="container">
                        <div className="header-info" style={{opacity: 1}}>
                            <h1 className="header-subtext">Создание, продвижение сайтов и другие IT Услуги</h1>
                            <h3 className="header-text">Добро пожаловать</h3>
                            <a className="button header-button" href="#servis">Ознакомиться</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    componentDidMount(){
        window.onscroll = ()=> {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            console.log(scrolled)
            if(scrolled>1){
                this.setState({classelemetn: false});
            }else{
                this.setState({classelemetn: true});
            }
          }
          
    }

}

