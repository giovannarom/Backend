// Metodos for each
const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]


let total=0

// En el primero recorre el array y encuentra todas las claves de los objetos
// En el segundo, va a agregado los keys en un array, sin repetirlos

objetos.forEach(objeto=>{
    const value = Object.values(objeto)
    subtotal=value.reduce((a,b)=>a+b,0)
    total+=subtotal
});
console.log("🚀 ~ total:", total)