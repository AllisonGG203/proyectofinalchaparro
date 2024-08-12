import React, { useState } from "react";
import ModalAgregarUsuario from "./ModalAgregarUsuario";
import ModalEditarUsuario from "./ModalEditarUsuario";
import '../styles/usuarios.css';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([
        {
            nombre: "Juan Perez",
            email: "juan.perez@example.com",
            username: "jperez",
            genero: "M",
            fechaNacimiento: "1990-01-01",
            tipoUsuario: "usuario normal",
            departamento: "Ventas"
        },
        {
            nombre: "Maria Gomez",
            email: "maria.gomez@example.com",
            username: "mgomez",
            genero: "F",
            fechaNacimiento: "1985-05-15",
            tipoUsuario: "administrador",
            departamento: "Recursos Humanos"
        }
    ]);

    const [isAgregarModalOpen, setIsAgregarModalOpen] = useState(false);
    const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    const handleAddUser = (newUser) => {
        setUsuarios([...usuarios, newUser]);
    };

    const handleEditUser = (updatedUser) => {
        setUsuarios(
            usuarios.map((usuario) =>
                usuario.username === usuarioSeleccionado.username ? updatedUser : usuario
            )
        );
    };

    const handleOpenEditModal = (usuario) => {
        setUsuarioSeleccionado(usuario);
        setIsEditarModalOpen(true);
    };

    return (
        <div className="usuarios-container">
            <div className="header">
                <h1 className="title">Usuarios</h1>
                <div className="actions">
                    <button className="button" onClick={() => setIsAgregarModalOpen(true)}>Agregar Usuario</button>
                    <button className="button">Departamentos</button>
                </div>
            </div>

            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Nombre de Usuario</th>
                        <th>Género</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Tipo de Usuario</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.genero}</td>
                            <td>{usuario.fechaNacimiento}</td>
                            <td>{usuario.tipoUsuario}</td>
                            <td>{usuario.departamento}</td>
                            <td>
                                <button className="button-action" onClick={() => handleOpenEditModal(usuario)}>Editar</button>
                                <button className="button-action">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalAgregarUsuario
                isOpen={isAgregarModalOpen}
                onClose={() => setIsAgregarModalOpen(false)}
                onSave={handleAddUser}
            />

            <ModalEditarUsuario
                isOpen={isEditarModalOpen}
                onClose={() => setIsEditarModalOpen(false)}
                onSave={handleEditUser}
                usuario={usuarioSeleccionado}
            />
        </div>
    );
}

export default Usuarios;
