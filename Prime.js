function Prime() {
    var n = 15, c = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            c++;
        }
    }
  function  checkp(){

        if (c === 2) {
            return "prime"
        }
        else {
            return "not prime"
        }
    }
return(
    <>
    <h3>{checkp()}</h3>
    </>
)
}
export default Prime