const Input = (props) => {
  return <input value={props.value} onChange={(e) => 
  props.inputHandler(e)}

  ></input>;
};

export default Input;
