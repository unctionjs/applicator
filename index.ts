export default function applicator<A, B> (mapper: (mapper: A) => B) {
  return function applicatorUnction (value: A): B {
    return mapper(value);
  };
}
