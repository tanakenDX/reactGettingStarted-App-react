import React from "react";

//memo 0212_cssのstyleをfileで定義して、cssfileへの関心を切った
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <>
      {/* <div className="input-area"> */}
      <div style={style}>
        <input placeholder="todoを入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};