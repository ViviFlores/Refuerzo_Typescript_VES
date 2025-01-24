import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ListaUsuario, Usuario } from "../interfaces/listaUsuarios";

export const Usuarios = () => {
    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        //llamar constante con la comunicación al API
        reqResApi.get<ListaUsuario>('/users')
            .then(resp => {
                //console.log(resp.data.data);
                //Cambiar el estado del arreglo users
                setUsers(resp.data.data);
            })
            .catch(console.log);
    }, []);

    //Función para mostrar la lista de usuarios
    const itemRowsTable = ({first_name, last_name, email, avatar}: Usuario) => {
        //desestrucción de objetos
        //const {first_name, last_name, email, avatar } = usuario;
        return (
            <tr>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{
                            width: 55,
                            borderRadius: 7
                        }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) => itemRowsTable(usuario))
                    }
                </tbody>
            </table>
        </div>
    )
}
