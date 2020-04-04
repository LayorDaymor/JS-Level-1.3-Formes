function unterschiedberechnen() {
    
    const firstAge =document.getElementById("firstage").value;
    const secoundAge=document.getElementById("secoundage").value;
    const diffirenzWessen = firstAge - secoundAge ;
    document.getElementById("ergibniss").innerText = diffirenzWessen;

}