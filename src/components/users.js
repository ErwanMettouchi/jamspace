import React, { useState, useEffect } from 'react'
import data from '../data.json'

export default  function Users() {

    const [departements, setDepartements] = useState([])

    useEffect(() => {
        fetch('https://geo.api.gouv.fr/departements')
        .then((res) => res.json())
        .then((data) => setDepartements(...departements, data))
    }, [])

    const userDepartmentCode = data.map(users => users.departments)
    const filteredDepartments = departements.map((department) => department.code)
    console.log(userDepartmentCode.includes(filteredDepartments))
    
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
