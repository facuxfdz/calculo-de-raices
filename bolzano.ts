// Función a calcular las raíces
const f = (x : number) : number => Math.exp(x) - 4 + x

const biseccion = (a : number,b : number,f : ( (x : number) => number ) ) : (number | undefined) => {
	if( f(a) * f(b) < 0){
		let xn = (a + b)/2
		console.log(xn)
		// Criterio de corte utilizado. Modificar el Math.pow() para cambiar el error admitido
		if( Math.abs( f(xn) ) <= Math.pow(10,-2) ) return xn
		Math.sign( f(xn) ) === Math.sign( f(a) ) ? a = xn : b = xn
		return biseccion(a,b,f)
	}
	
}	

const res = biseccion(1,2,f)
console.log('RESULTADO DESPUES DE LA ITERACIÓN',res)
