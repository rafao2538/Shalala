import { useState } from 'react'
import './App.css'
import logoGta from './assets/logo-gta.svg'
import { Gamepad2, Joystick, GamepadDirectional } from 'lucide-react';

export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={logoGta} alt="" />
        </section>

        <footer>
          <small>@2026 ag2cti.com</small>
          <div id="social">
            <div className="rs"><Joystick /></div>
            <div className="rs"><Gamepad2 /></div>
            <div className="rs"><GamepadDirectional /></div>
          </div>
        </footer>
      </main>
    </>
  )
}
