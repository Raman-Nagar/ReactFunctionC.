function Revers(){
    var str= "ramannagar"
    var rev = "";
    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
   
        return(
            <>
            <h3>revers of string = {rev}</h3>
            </>
        )
}
export default Revers