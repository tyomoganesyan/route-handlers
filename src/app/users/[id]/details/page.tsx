"use client"

import { IUser, InputUser } from "@/lib/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props {
    params: { id: number }
}

export default function Page({ params }: Props) {
    const router = useRouter()

    const [newUser, setNewUser] = useState<InputUser>({
        name: "", surname: "", salary: 0
    })
    const [user, setUser] = useState<IUser>()

    const handleUpdate = (event: React.FormEvent) => {
       event.preventDefault()
        axios
            .put("/users/" + params.id, newUser )
            .then(resposne => {
                router.push("/")
            })
    }

    useEffect(() => {
        axios
            .get('/users/' + params.id,)
            .then(res => {
                setUser(res.data)
            })
    }, [])

    const handleDelete = () => {
        axios
            .delete('/users/' + params.id)
            .then(res => {
                router.push('/')
            })
    }

    return <>
        <h3 style={{
            color: '#2c3e50', // Darker blue-gray
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center'
        }}>User Details No. {params.id}</h3>

        <div style={{
            padding: '20px',
            border: '2px solid #3498db', // Blue border
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '400px',
            margin: '20px auto',
            backgroundColor: '#f0f8ff', // Light blue background
            textAlign: 'center'
        }}>
            <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#e74c3c', // Red color for the name
                margin: '0 0 10px',
            }}>
                {user?.name} {user?.surname}
            </p>
            <p style={{
                fontSize: '18px',
                color: '#2ecc71', // Green color for the salary
                margin: '0',
            }}>
                {user?.salary} AMD
            </p>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px', // Space between buttons
            marginTop: '20px'
        }}>

            <button
                onClick={handleDelete}
                style={{
                    backgroundColor: '#e74c3c', // Red
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    outline: 'none',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                Delete
            </button>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px', // Space between buttons
            marginTop: '20px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                maxWidth: '400px',
                margin: '0 auto'
            }}>
                <form
                    onSubmit={handleUpdate}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: '15px'
                    }}>
                    <input
                        defaultValue={user?.name}
                        value={newUser?.name}
                        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                        type="text"
                        placeholder="Name"
                        style={{
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            width: '100%'
                        }}
                    />
                    <input
                        defaultValue={user?.surname}
                        value={newUser?.surname}
                        onChange={e => setNewUser({ ...newUser, surname: e.target.value })}
                        type="text"
                        placeholder="Surname"
                        style={{
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            width: '100%'
                        }}
                    />
                    <input
                        value={newUser?.salary}
                        step={15000}
                        onChange={e => setNewUser({ ...newUser, salary: +e.target.value })}
                        type="number"
                        placeholder="salary"
                        style={{
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            width: '100%'
                        }}
                    />
                    <button
                        style={{
                            padding: '12px 20px',
                            backgroundColor: '#3498db',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            marginTop: '10px'
                        }}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    </>
}
