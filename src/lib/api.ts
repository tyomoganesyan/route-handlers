import Database from "better-sqlite3";
import { IUser, InputUser } from "./types";
const db = new Database('social.db')


export const addUser = (user: InputUser): Database.RunResult => {
    return db.prepare(`
        INSERT INTO users(name, surname, salary)
        VALUES(@name, @surname, @salary)
    `).run(user)
}

export const getAllUsers = (): IUser[] => {
    return db.prepare("SELECT * FROM users").all() as IUser[]
}

export const getUserById = (id: number): IUser => {
    return db.prepare("SELECT * FROM users WHERE id = ?").get(id) as IUser
}

export const deleteUserById = (id: number) => {
    return db.prepare("DELETE FROM users WHERE id = @id").run({ id })
}

export const updateUserById = (user: IUser) => {
  db.prepare(`
             UPDATE users
             SET name = @name, surname = @surname, salary = @salary
             WHERE id = @id
    `).run(user)
}