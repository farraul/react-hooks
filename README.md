# Hooks React

**UseContext**:  Para guardar los datos y pasarlos a componentes lejanos, como redux.

**UseReducer**:  Como el usestate pero constantes más complejas, gracias al switcth.

**UseForm**:     Hook personalizado para formularios, no es un hook del mismo react, desde un archivo. tenemos el handle.

**UseRef**:      Es como una variable que si la seteamos a ella misma, no redenderiza de nuevo todo el componente. No redenderiza cuando cambia, nos puede servir para saber el estado "anterior" con un useeffect[] de por medio. Al no redenderizar se ve en el siguiente redenderizado. 


**UseCallBack**: Devuelve una función memorizada. Ahora el hijo no se ejectuta de nuevo si no cambian sus props, podría ser un hook que se está pasando por las props. Ayuda a no redenderizar a los hijos sin necesidad.

**UseMemo**: Devuelve un valor memorizado. Nos permite que no tire la funcion si alguien no setea el hook desde otro lado.


