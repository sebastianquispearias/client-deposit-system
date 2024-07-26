import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = `${dni}@example.com`; // Usar DNI como correo electrónico

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login exitoso');
      window.location.href = 'index_old.html'; // Redirigir a index_old.html
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="DNI" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
