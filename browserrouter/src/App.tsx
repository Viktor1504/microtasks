import React from 'react';
import styles from './components/Site.module.css';
import {PageOne} from './components/pages/PageOne';
import {PageTwo} from './components/pages/PageTwo';
import {Link, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {PageThree} from './components/pages/PageThree';
import {Error404} from './components/pages/Error404';
import {S} from './components/pages/_styles'

const PATH = {
    PAGE1: '/pageOne',
    PAGE2: '/pageTwo',
    PAGE3: '/pageThree',
    ERROR: '/page/error404'
} as const

function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {/*<div className={styles.navLinks}>*/}
                {/*    <div>*/}
                {/*        <NavLink to={'pageOne'}*/}
                {/*                 className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>PageOne</NavLink>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <NavLink to={'pageTwo'}*/}
                {/*                 className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>PageTwo</NavLink>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <NavLink to={'pageThree'}*/}
                {/*                 className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>PageThree</NavLink>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <S.NavWrapper>
                    <S.Nav>
                        <a href={'https://vk.com/feed'} target={'_blank'} rel={'nofollow'}>xxx</a>
                    </S.Nav>
                    <S.Nav>
                        <NavLink to={PATH.PAGE1}>PageOne</NavLink>
                    </S.Nav>
                    <S.Nav>
                        <NavLink to={PATH.PAGE2}>PageTwo</NavLink>
                    </S.Nav>
                    <S.Nav>
                        <NavLink to={PATH.PAGE3}>PageThree</NavLink>
                    </S.Nav>
                </S.NavWrapper>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/PageOne'}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        {/*<Route path={'*'} element={<Navigate to={'page/error404'}/>}/>*/}
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

