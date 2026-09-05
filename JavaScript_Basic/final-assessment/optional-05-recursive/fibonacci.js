  function fibonacci(n) {
    if(n === 1){
      return 1;
    }
    else if(n === 0){
      return 0;
    }
    return fibonacci(n-2) + fibonacci(n-1);
  }

// Jangan hapus kode di bawah ini!
export default fibonacci;
