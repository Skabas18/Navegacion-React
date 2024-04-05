import React from 'react'

function LogoutPage() {
  const logout = (e)=>{
    e.preventDefault();
    console.log('Logout');
  }
  return (
    <>
        <h1>Logout</h1>
        <form onSubmit={logout}>
            <label>¿Quieres salir?</label>
            <button type='submit'>Salir</button>
        </form>
    </>
)
}

export default LogoutPage