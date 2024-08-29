for (let i = 2; i <= 100; i++) {
    let prime = 1; 
    
 
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        prime = 0;
      }
    }
    
    if (prime === 1) {
      console.log(i); 
    }
}
  
