---
title: Array.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`values()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues _[Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück, das den Wert jedes Elements im Array durchläuft.

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

Bei der Verwendung auf [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) durchläuft die `values()`-Methode leere Slots, als ob sie den Wert `undefined` haben.

Die `values()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Schlüssel mit ganzzahligen Werten besitzt.

## Beispiele

### Iteration mit for...of-Schleife

Da `values()` ein iterierbares Iterator-Objekt zurückgibt, können Sie eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, um darüber zu iterieren.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### Iteration mit next()

Da der Rückgabewert auch ein Iterator ist, können Sie direkt die `next()`-Methode aufrufen.

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

### Wiederverwendung des Iterators

> [!WARNING]
> Das Array-Iterator-Objekt sollte nur einmal verwendet werden. Verwenden Sie es nicht wieder.

Der aus `values()` zurückgegebene Iterator ist nicht wiederverwendbar. Wenn `next().done = true` oder `currentIndex > length`, [endet die `for...of`-Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols), und ein weiteres Iterieren hat keinen Effekt.

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
// undefined
```

Wenn Sie eine [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden, um die Iteration vorzeitig zu beenden, kann der Iterator von der aktuellen Position aus fortgesetzt werden, wenn weiter iteriert wird.

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

### Veränderungen während der Iteration

Es werden keine Werte im aus `values()` zurückgegebenen Array-Iterator-Objekt gespeichert; stattdessen speichert es die Adresse des Arrays, das bei seiner Erstellung verwendet wurde, und liest den aktuell besuchten Index bei jeder Iteration. Daher hängt die Ausgabe der Iteration vom Wert ab, der zu diesem Zeitpunkt an diesem Index gespeichert ist. Wenn sich die Werte im Array ändern, ändern sich die Werte des Array-Iterator-Objekts ebenfalls.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Im Gegensatz zu [iterierenden Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt nicht die Länge des Arrays zum Zeitpunkt seiner Erstellung, sondern liest sie bei jeder Iteration einmal. Daher, wenn das Array während der Iteration wächst, besucht der Iterator auch die neuen Elemente. Dies kann zu Endlosschleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iteration von sparse Arrays

`values()` wird leere Slots besuchen, als ob sie `undefined` sind.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufrufen von values() auf Nicht-Array-Objekten

Die `values()`-Methode liest die `length`-Eigenschaft von `this` aus und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist.

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
- [es-shims polyfill von `Array.prototype.values`](https://www.npmjs.com/package/array.prototype.values)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
