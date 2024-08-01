"use client"

import { useEffect, useState } from "react"
import { IUser } from "./types"
import axios from "axios"
import Link from "next/link"

export const UserList = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    axios
      .get('/users')
      .then(res => {
        console.log(res.data)
        setUsers(res.data.users)
      })
  }, [])


  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff', // Alice Blue
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h3 style={{
        color: '#3498db', // Bright Blue
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>User List</h3>
      {
        users.map(elm => (
          <div key={elm.id} style={{
            border: '1px solid #e0e0e0', // Light Gray border
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '16px',
            backgroundColor: '#ffffff', // White background
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease'
          }}>
            <p style={{
              margin: '0',
              fontSize: '18px',
              color: '#333' // Dark Gray
            }}>{elm.name} {elm.surname}</p>
            <strong style={{
              display: 'block',
              margin: '8px 0',
              fontSize: '16px',
              color: '#2ecc71' // Emerald Green
            }}>{elm.salary} AMD</strong>
            <Link href={`/users/${elm.id}/details`}
              style={{
                color: '#3498db', // Bright Blue
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                borderBottom: '2px solid #3498db', // Underline effect
                transition: 'color 0.3s ease, border-bottom 0.3s ease'
              }}>account
            </Link>
          </div>
        ))
      }
    </div>
  );
};


