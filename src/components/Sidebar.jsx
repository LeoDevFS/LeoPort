import React from 'react'

function Sidebar() {
  return (
    <aside className="sidebar active">
    <div className="sidebar-info">
      <figure className="avatar-box">
        {/* Imagen eliminada para evitar errores */}
        <span
          className="active-status"
          title="Available for work!"
        ></span>
      </figure>
      <div className="info-content">
        <h1 className="name">Leonel Sicaro</h1>
        <p className="title">Web Developer</p>
      </div>
    </div>
  </aside>
  )
}

export default Sidebar