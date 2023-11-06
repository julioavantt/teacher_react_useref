import { useState, useRef } from "react"

//! Creamos una variable persistente que no volverá a representar el componente cuando cambie de valor.

export const UseRefComoVariable = () => {
	const [_, setUpdateCounter] = useState(false)

	const refCounter = useRef(0)

	const handleRef = () => {
		refCounter.current++
		console.log("refCounter: " + refCounter.current)
	}

	return (
		<>
			<h2>Ejemplo useRef como variable</h2>
			<button onClick={() => setUpdateCounter(prev => !prev)}>
				Actualizo el estado por lo cual se actualiza la referencia en pantalla
			</button>
			<button onClick={handleRef}>
				Actualizo el valor de current pero sólo en consola hasta que actualice el
				estado
			</button>
			<mark>
				<h3>refCounter.current: {refCounter.current}</h3>
			</mark>
		</>
	)
}
