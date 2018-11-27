import React from "react";
import styled from "styled-components";

const Label = styled.label`
  color: ${props => (props.loading ? "saddlebrown" : "mediumseagreen")};
`;

const Input = props => (
  <div>
    <Label htmlFor="inputName">{props.label}</Label>
    <input
      type={props.type || "text"}
      id={props.id}
      className="form-control"
      placeholder={props.label}
      required={props.required}
      onChange={e => {
        props.onChange(e.target.value);
      }}
      value={props.value}
    />
  </div>
);

/* Custom Component Hard
const HtmlInput = styled.input`
  background: #ddd;
`;

const Input = props => (
  <div>
    <label htmlFor="inputName">{props.label}</label>
    <HtmlInput
      type={props.type || "text"}
      id={props.id}
      className="form-control"
      placeholder={props.label}
      required={props.required}
      onChange={e => {
        props.onChange(e.target.value);
      }}
      value={props.value}
    />
  </div>
);
*/

export default Input;
