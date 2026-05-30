import "./Components.css";

export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  minLength,
  maxLength,
  required = false,
  rows = 5,
}) {
  return (
    <label htmlFor={id} className="input-group">
      <div className="input-label">
        {label}
        {required && <span className="required-asterisk">*</span>}
      </div>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        />
      )}
    </label>
  );
}
