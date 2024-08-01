import { deleteUserById, getUserById, updateUserById } from "@/lib/api"
import { IUser } from "@/lib/types";

export const GET = (req: Request, { params }: { params: { id: number } }): Response => {
    const user = getUserById(params.id)
    return Response.json(user);
}

export const DELETE = (req: Request, { params }: { params: { id: number } }) => {
    const data = deleteUserById(params.id)
    return Response.json({ data, message: " Data deleted successfully" })
}

export const PUT = async (req: Request, { params }: { params: { id: number } }) => {
    const data = await req.json()
    const result = updateUserById({ id: params.id, ...data })
    return Response.json({data:result, message: "Data updated successfully" })
}

