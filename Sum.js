function Sum(){
    console.log("raman")
    var arr=[2,4,3,5,6,7]
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
   
        return(
            <>
            <h3>sum of array element = {sum}</h3>
            </>
        )
}
export default Sum