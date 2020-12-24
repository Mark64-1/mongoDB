import React, {useEffect} from 'react';
import axios from "axios";
import * as path from "path";
import {logoutUser} from "../../../_actions/user_actions";
import {useDispatch} from "react-redux";

function LandingPage(props) {

    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('/api/hello')
            .then(response=>console.log(response))
    },[])

    const onClickHandler=()=>{

        dispatch(logoutUser())
            .then(response=>{
                if(response.data.success){
                    props.history.push("/login")
                }else{
                    alert("error")
                }
            })

    }


    return (
        <div style={{
            display:'flex',justifyContent:'center', alignItems:"center",width:"100%", height:"100vh"
        }}>
            <h2>LandingPage</h2>
            <br/>
            <button onClick={onClickHandler}>
                LOGOUT
            </button>
        </div>
    );
}

export default LandingPage;

