---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`values()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues _[Array-Iteratoren-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das den Wert jedes Elements im Array iteriert.

{{InteractiveExample("JavaScript Demo: Array.prototype.values()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator = array1.values();

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

Wenn es auf [sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die `values()`-Methode leere Slots, als hätten sie den Wert `undefined`.

Die `values()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Ganzzahl-eigenschlüssel hat.

## Beispiele

### Iteration mit for...of Schleife

Da `values()` einen iterierbaren Iterator zurückgibt, können Sie eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, um ihn zu iterieren.

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
> Das Array-Iterator-Objekt sollte ein Einmalgebrauchs-Objekt sein. Verwenden Sie es nicht wieder.

Das von `values()` zurückgegebene Iterable ist nicht wiederverwendbar. Wenn `next().done = true` oder `currentIndex > length`, [endet die `for...of`-Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols), und weiteres Iterieren hat keinen Effekt.

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

Wenn Sie eine [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden, um die Iteration vorzeitig zu beenden, kann der Iterator an der aktuellen Position fortgesetzt werden, wenn Sie ihn weiter iterieren.

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

### Änderungen während der Iteration

Es werden keine Werte im zurückgegebenen Array-Iterator-Objekt von `values()` gespeichert; stattdessen wird die Adresse des Arrays gespeichert, das bei seiner Erstellung verwendet wurde, und bei jeder Iteration wird der aktuell besuchte Index gelesen. Daher hängt die Iterationsausgabe von dem in diesem Index zum Zeitpunkt des Schritts gespeicherten Wert ab. Wenn sich die Werte im Array ändern, ändern sich auch die Werte des Array-Iterator-Objekts.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Im Gegensatz zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt nicht die Länge des Arrays zum Zeitpunkt seiner Erstellung, sondern liest sie bei jeder Iteration. Daher, wenn das Array während der Iteration wächst, wird der Iterator die neuen Elemente ebenfalls besuchen. Dies kann zu Endlosschleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iterieren von Sparse Arrays

`values()` besucht leere Slots, als ob sie `undefined` sind.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufrufen von values() auf Nicht-Array-Objekten

Die `values()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
