import React from 'react';

interface Doctor {
  nombre: string;
  imagen: string;
  especialidad: string;
  resumen: string;
  años_experiencia: number;
  valor_consulta: number;
  informacion_adicional: {
    horarios_disponibles: string[];
    contacto: {
      telefono: string;
      email: string;
    };
  };
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img
        src={`src/assets/img/${doctor.imagen}`}
        alt={`Foto de ${doctor.nombre}`}
        className="doctor-image"
      />
      <div className="doctor-info">
        <h2>{doctor.nombre}</h2>
        <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
        <p><strong>Resumen:</strong> {doctor.resumen}</p>
        <p><strong>Años de experiencia:</strong> {doctor.años_experiencia}</p>
        <p><strong>Valor consulta:</strong> ${doctor.valor_consulta.toLocaleString()}</p>
        <div>
          <strong>Horarios disponibles:</strong>
          <ul>
            {doctor.informacion_adicional.horarios_disponibles.map((horario, index) => (
              <li key={index}>{horario}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Contacto:</strong>
          <p>Teléfono: {doctor.informacion_adicional.contacto.telefono}</p>
          <p>Email: {doctor.informacion_adicional.contacto.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
