import { UserList } from "@/lib/user-list";
import Link from "next/link";

export default function Page() {
  
    return <>
        <Link href="users/add"
            style={{
            display: 'inline-block',
            backgroundColor: '#3498db', // Bright blue
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 20px',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
          }}>
            Add User
        </Link>
        <div style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f9f9f9', // Light gray background
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <UserList />
        </div>
      </>
}
  