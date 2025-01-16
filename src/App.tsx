import { useState, useEffect } from 'react';
import DoctorCard from './components/DoctorCard';
import './App.css';

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

function App() {
  const [equipo, setEquipo] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch('src/assets/equipo.json')
      .then((response) => response.json())
      .then((data) => setEquipo(data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div className="doctor-list">
      {equipo.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
}

export default App;
