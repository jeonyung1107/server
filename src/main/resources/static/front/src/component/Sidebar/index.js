import React, {Component} from 'react'
import styles from './index.module.css'
import Profile from "./Profile";

export default class Sidebar extends Component {

    defaultProps = {
        display: false
    }

    toggle = () => {
        this.props.toggle();
    }

    clickSidebar = (e) => {
        e.stopPropagation()
    }

    logout = () => {
        localStorage.removeItem("expAccessToken")
    }

    login = () => {
        window.open("/login")
    }

    render() {

        const token = localStorage.getItem("expAccessToken")

        if (token) {
            var login = (
                <div className={[styles.con24, styles.pointer].join(' ')}>
                    <span className={styles.logout} onClick={this.logout}>로그아웃</span>
                </div>
            )
        } else {
            var login = (
                <div className={[styles.con24, styles.pointer].join(' ')}>
                    <span className={styles.logout} onClick={this.login}>로그인</span>
                </div>
            )
        }

        const style = {
            display: this.props.display ? 'inline' : 'none'
        }

        return (
            <div className={styles.container} style={style} onClick={this.toggle}>
                <div className={styles.sidebar} onClick={this.clickSidebar}>
                    <div className={styles.top}/>
                    <Profile/>
                    <div className={styles.line}/>
                    <div id="알림" className={styles.con24}>
                        <img src="/image/bell.svg" className={styles.icon}/>
                        <span className={styles.text}>알림</span>
                        <div className={styles.noti}>
                            <span className={styles.text}>25</span>
                        </div>
                    </div>
                    <div id="요청" className={styles.con24}>
                        <img src="/image/pencel.svg" className={styles.icon}/>
                        <span className={styles.text}>경험 요청서 작성</span>
                    </div>
                    <div id="제공" className={[styles.con24, styles.b].join(' ')}>
                        <img src="/image/pencel.svg" className={styles.icon}/>
                        <span className={styles.text}>나의 경험 작성</span>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.lbox}>
                        <p className={[styles.text, styles.m].join(' ')}>경험 요청 리스트</p>
                        <p className={[styles.text, styles.m].join(' ')}>경험 제공 리스트</p>
                        <p className={styles.text}>태그로 보기</p>
                    </div>
                    <div className={styles.qbox}>
                        <p className={[styles.text, styles.m].join(' ')}>FAQ</p>
                        <p className={[styles.text, styles.m].join(' ')}>공지사항</p>
                        <p className={styles.text}>회사소개</p>
                    </div>
                    <div className={styles.line}/>
                    {login}
                </div>
            </div>
        );
    }
}