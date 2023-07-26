import React, { useState, useEffect } from 'react'
import data from '../data.json'
import axios from 'axios'


function handleClick(list) {
    
}

export default function Users() {

    const [departements, setDepartements] = useState([])
    const dataUsers = data.map((users) => {
        return {...users, departments: users.departments.filter((dep) => dep === departements.map((departement) => departement.code))}
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://geo.api.gouv.fr/departements')
            setDepartements(...departements, result.data)
        }
        fetchData()
    }, [])
    
    console.log(dataUsers)

    return (
        <div>
            <ul>
                {data.map((users) =>
                    <li key={users.id}>{users.name}</li>
                )}
            </ul>
            <select>
                    
            </select>
        </div>
    )
}
