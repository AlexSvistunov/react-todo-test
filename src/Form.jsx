import Input from "./Input";
import Button from "./assets/Button";

const Form = (props) => {
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          props.formHandler();
        }}
      >
        <Input inputHandler={props.inputHandler} value={props.inputValue} />
        <Button></Button>
      </form>
    </>
  );
};

export default Form;
