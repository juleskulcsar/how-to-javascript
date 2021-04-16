const debounce = (func, wait) => { 
  let timeout;
  return () =>{
    const args = arguments;
    const t = ()=> {
      timeout = null;
      func.apply(this, args)
    };
    clearTimeout(timeout);
    timeout = setTimeout(t, wait || 200);
  }
}