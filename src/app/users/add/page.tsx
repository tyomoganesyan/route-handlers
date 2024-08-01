"use client"

import { InputUser } from "@/lib/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function Page() {

    const [user, setUser] = useState<InputUser>({
        name: "", surname: "", salary: 65000
    })

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        axios
            .post('/users', user)
            .then(res => {
                router.push('/')
            })
    }

    return <>
        <h1 style={{
            color: '#3498db', // Bright blue
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center'
        }}>Add User</h1>
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            margin: '0 auto',
            backgroundColor: '#f0f8ff', // Alice blue background
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{ marginBottom: '16px' }}>
                <input
                    type="text"
                    placeholder="name"
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '4px',
                        border: '2px solid #ff6347', // Tomato red border
                        fontSize: '16px',
                        color: '#333',
                        backgroundColor: '#fff5f5', // Light pink background
                        outline: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
            <div style={{ marginBottom: '16px' }}>
                <input
                    type="text"
                    placeholder="surname"
                    value={user.surname}
                    onChange={e => setUser({ ...user, surname: e.target.value })}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '4px',
                        border: '2px solid #ff6347', // Tomato red border
                        fontSize: '16px',
                        color: '#333',
                        backgroundColor: '#fff5f5', // Light pink background
                        outline: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
            <div style={{ marginBottom: '16px' }}>
                <input
                    type="number"
                    step={15000}
                    placeholder="Salary"
                    value={user.salary}
                    onChange={e => setUser({ ...user, salary: +e.target.value })}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '4px',
                        border: '2px solid #ff6347', // Tomato red border
                        fontSize: '16px',
                        color: '#333',
                        backgroundColor: '#fff5f5', // Light pink background
                        outline: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
            <button style={{
                backgroundColor: '#2ecc71', // Emerald green
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                padding: '12px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                save
            </button>
        </form>
    </>
}