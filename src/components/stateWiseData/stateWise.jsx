import React,{ useEffect, useState } from 'react';
import './stateWise.css'
import Navbar from './Navbar.jsx'

const StateWise = () => {
    
    const [data, setData] = useState([]);
    
    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json()
        setData(actualData.statewise)
    }
    
    useEffect(() =>{
        getCovidData();
    })

    
    return (
        <>
            <div>
                <Navbar/>
                <table class="table table-striped table-bordered table-hover">
                    <thead class="table-dark">
                        <tr>
                                <th> # </th>
                                <th> State </th>
                                <th> Confirmed </th>
                                <th> Recovered </th>
                                <th> Deaths </th>
                                <th> Active </th>
                                <th> Updated </th>
                        </tr>
                        </thead>
                        <tbody>
                                {
                                    data.map((curElem,ind) => {
                                        return (
                                        <tr key = {ind} 
                                        className={curElem.state === 'Total'?"table-warning tot":" "}
                                        >
                                        <td> <b>{ind}</b></td>
                                        <td> {curElem.state} </td>
                                        <td> {curElem.confirmed} </td>
                                        <td> {curElem.recovered} </td>
                                        <td> {curElem.deaths} </td>
                                        <td> {curElem.active} </td>
                                        <td> {curElem.lastupdatedtime} </td>
                                        </tr>
                                        )
                                    })
                                }                            
                        </tbody>
                    </table>
            </div>
        </>
    )
}

export default StateWise
