/** @format */

export function Input({ value, children, set, min = -200, max = 200 }) {
  return (
    <label>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
      <code style={{paddingLeft:10}}>{children}</code>
    </label>
  );
}
