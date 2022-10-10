function Fabbonacci(){
    var a = 0;
    var b = 1;
    var c = 0;
    var n = 10;
    var arr = [];
    for(let i=0; i<n; i++){
        arr.push(c)
        a=b
        b=c
        c=a+b
    }
    return(
        <>
        <h3>Fabbonacci = {arr+""}</h3>
        </>
    )
}
export default Fabbonacci