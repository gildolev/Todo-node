

const {getTodo,setTodo}= require ('./todo.js')


function displayTodo() {
    const todos = getTodo().map((thing, i) => {
        return `-${thing}-${i + 1}`
    })
    console.log(todos.join('\n'))
}
//displayTodo()



function addToto(){
    console.log("task add")
    const[first,sec,...rest] =process.argv;
    setTodo(rest)
    console.log('OK')
}

if(process.argv.length===2){
    displayTodo()

}
else{
    addToto()
}
