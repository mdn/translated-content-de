---
title: Array.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 4ba102cc94aa48226595635679334462cb46fa29
---

Die **`values()`** Methode von {{jsxref("Array")}} Instanzen gibt ein neues _[Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück, das den Wert jedes Elements im Array durchläuft.

{{InteractiveExample("JavaScript Demo: Array.prototype.values()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

`Array.prototype.values()` ist die Standardimplementierung von [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator).

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; // true
```

Wenn sie auf [sparsely arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, durchläuft die `values()`-Methode leere Positionen, als hätten sie den Wert `undefined`.

Die `values()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-geschlüsselte Eigenschaften hat.

## Beispiele

### Iteration mit einer for...of Schleife

Da `values()` einen iterierbaren Iterator zurückgibt, können Sie eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwenden, um ihn zu durchlaufen.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### Iteration mit next()

Da der Rückgabewert ebenfalls ein Iterator ist, können Sie direkt dessen `next()`-Methode aufrufen.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined
```

### Wiederverwendung des Iterables

> [!WARNING]
> Das Array-Iterator-Objekt sollte ein Einweg-Objekt sein. Es sollte nicht wiederverwendet werden.

Das von `values()` zurückgegebene Iterable ist nicht wiederverwendbar. Wenn `next().done = true` oder `currentIndex > length`, [endet die `for...of` Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols), und ein weiteres Durchlaufen hat keinen Effekt.

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// No output
```

Wenn Sie eine [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden, um die Iteration vorzeitig zu beenden, kann der Iterator bei Fortsetzung der Iteration von der aktuellen Position aus fortgesetzt werden.

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"
```

### Mutationen während der Iteration

Im Array-Iterator-Objekt, das von `values()` zurückgegeben wird, sind keine Werte gespeichert; stattdessen speichert es die Adresse des Arrays, das bei seiner Erstellung verwendet wurde, und liest den aktuell besuchten Index bei jeder Iteration. Daher hängt seine Iterationsausgabe von dem Wert ab, der zu diesem Zeitpunkt an diesem Index gespeichert ist. Ändern sich die Werte im Array, ändern sich auch die Werte des Array-Iterator-Objekts.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Im Gegensatz zu den [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt die Länge des Arrays nicht zum Zeitpunkt seiner Erstellung, sondern liest sie bei jeder Iteration einmal. Daher wird der Iterator, wenn das Array während der Iteration wächst, auch die neuen Elemente besuchen. Dies kann zu Endlosschleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iteration von sparse Arrays

`values()` wird leere Slots besuchen, als ob sie `undefined` wären.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufrufen von values() für Objekte, die keine Arrays sind

Die `values()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nicht-negativer Integer ist, der kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by values() since length is 3
};
for (const entry of Array.prototype.values.call(arrayLike)) {
  console.log(entry);
}
// a
// b
// c
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.values`](https://www.npmjs.com/package/array.prototype.values)
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
