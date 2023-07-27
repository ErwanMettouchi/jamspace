import React, { useState, useEffect } from 'react'
import data from '../data.json'
import axios from 'axios'

export default function DisplayUsers() {

    return (
        <div>
            <ul>
                {data.map((users) =>
                    <li key={users.id}>{users.name}</li>
                )}
            </ul>
            <Dropdown />
        </div>
    )
}

function Dropdown() {

    const [departements, setDepartements] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://geo.api.gouv.fr/departements')
            setDepartements(...departements, result.data)
        }
        fetchData()
    }, [])

    const departmentsUsers = data.flatMap(user => user.departments)
    const filteredDepartments = departements.flatMap(d => d.code).filter((department) => departmentsUsers.includes(parseInt(department)))

    // console.log(filteredDepartments)

    return (
        <select style={{padding: 10, textAlign: "left", margin: 15}} onChange={DisplayUsersOnClick}>
            {departements.map(dep => filteredDepartments.includes(dep.code) ? <option value={dep.code}>{dep.nom}</option> : null)}
        </select>
    )
}

function DisplayUsersOnClick(code) {
    return (
        data.map(user => user.departments).filter(u => u.includes(parseInt(code)) ? <li key={u.id>u.name}>{u.name}</li> : null))
}