import React from 'react'
import { Outlet } from "react-router-dom";
import LeftSideBar from '../components/LeftSideBar';

class MainPage extends React.Component{
    constructor(props: any){
        super(props)
    }

    render(){
        return (
            <>
                <LeftSideBar />
                <Outlet />
            </>
        )
    }

}

export default MainPage;