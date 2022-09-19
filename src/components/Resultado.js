import React from 'react'


export const Resultado = ({total,plazo,cantidad}) =>(
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>La cantidad solicitada es $RD {cantidad}</p>
            <p>El plazo a pagar es {plazo}</p>
            <p>Su pago mensual a pagar es  $RD {(total / plazo).toFixed(2)}</p>
            <p>El Total a pagar es {total.toFixed(2)}</p>
        </div>
    )

export default Resultado;