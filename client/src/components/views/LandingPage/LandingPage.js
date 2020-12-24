import React, {useEffect} from 'react';
import axios from "axios";
import * as path from "path";
function LandingPage(props) {

    useEffect(()=>{
        axios.get('/api/hello')
            .then(response=>console.log(response))
    },[])

    const onClickHandler=()=>{
        console.log("123412341234")
        props.history.push("/login")
        axios.get('/api/users/logout')
            .then(response=>{
                if(response.data.success){
                    props.history.push("/login")
                }else{
                    alert("로그아웃 하는데 실패 했습니다.")
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

