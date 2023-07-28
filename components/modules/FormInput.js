const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={(e) => onChange(e)}
      ></input>
    </div>
  );
};

export default FormInput;
