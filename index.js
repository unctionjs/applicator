export default function applicator (unction) {
  return function applicatorUnction (value) {
    return unction(value);
  };
}
