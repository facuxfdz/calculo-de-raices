// Función a calcular las raíces
const f = (x : number) : number => Math.exp(x/2) - Math.pow(x,2) - 3*x

const biseccion = (a : number,b : number,f : ( (x : number) => number ) ) : (number | undefined) => {
	if( f(a) * f(b) < 0){
		let xn = (a + b)/2
		console.log(xn)
		// Criterio de corte utilizado. Modificar el Math.pow() para cambiar el error admitido
		if( Math.abs( f(xn) ) <= Math.pow(10,-5) ) return xn
		Math.sign( f(xn) ) === Math.sign( f(a) ) ? a = xn : b = xn
		return biseccion(a,b,f)
	}else {
		console.log('Problema con los signos')
		return undefined
	}
	
}	

const resultadoPrimerIntervalo= biseccion(-4,-2,f)
const resultadoSegundoIntervalo = biseccion(0,0.5,f)
console.log('RESULTADO APROXIMADO DE LA PRIMER RAÍZ DESPUES DE LA ITERACIÓN',resultadoPrimerIntervalo)
console.log('RESULTADO APROXIMADO DE LA SEGUNDA RAÍZ DESPUES DE LA ITERACIÓN',resultadoSegundoIntervalo)
