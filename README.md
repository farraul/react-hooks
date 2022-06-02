# Hooks React

**UseState**: ✔️

**UseEffect**: ✔️

**UseContext**:  Para guardar los datos y pasarlos a componentes lejanos, como redux.

**UseReducer**:  Como el usestate pero constantes más complejas, gracias al switcth.

**UseForm**:     Hook personalizado para formularios, no es un hook del mismo react, desde un archivo. tenemos el handle.

**UseRef**:      Es como una variable que si la seteamos a ella misma, no redenderiza de nuevo todo el componente. No redenderiza cuando cambia, nos puede servir para saber el estado "anterior" con un useeffect[] de por medio. Al no redenderizar se ve en el siguiente redenderizado. 

**UseMemo**: Devuelve un valor memorizado. Controlando un hook. Evita que redendericen los hijos.

**UseCallBack**: Devuelve una función memorizada. Controlando un hook. Evita que redendericen los hijos. Se complementa a veces con el UseMmemo

