import { useRef } from "react";

export const UseRefDom = () => {
  const inputRef = useRef(null);

  return (
    <>
      <h2>Ejemplo useRef DOM</h2>
      <input ref={inputRef} placeholder="Veamos el focus" />
      <button onClick={() => inputRef.current.focus()}>Enfocar input</button>
      {console.log(inputRef)}
    </>
  );
};

