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


let newArray = []

// En el primero recorre el array y encuentra todas las claves de los objetos
// En el segundo, va a agregado los keys en un array, sin repetirlos

objetos.forEach(objeto=>{
    const keys = Object.keys(objeto)
    keys.forEach(key=>{
        if (!newArray.includes(key)) newArray.push(key)
    });
});
console.log("🚀 ~ newArray:", newArray)