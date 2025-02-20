---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`values()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues _[Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das den Wert jedes Elements im Array iteriert.

{{InteractiveExample("JavaScript Demo: Array.values()")}}

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

Bei der Verwendung auf [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) iteriert die `values()`-Methode leere Stellen, als hätten sie den Wert `undefined`.

Die `values()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Index-Eigenschaften besitzt.

## Beispiele

### Iteration mit der for...of-Schleife

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

### Wiederverwendung des Iterierbaren

> [!WARNING]
> Das Array-Iterator-Objekt sollte nur einmalig verwendet werden. Verwenden Sie es nicht erneut.

Das aus `values()` zurückgegebene Iterierbare ist nicht wiederverwendbar. Wenn `next().done = true` oder `currentIndex > length`, [endet die `for...of`-Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols), und ein weiteres Iterieren hat keine Wirkung.

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

Wird eine [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwendet, um die Iteration frühzeitig zu beenden, kann der Iterator vom aktuellen Stand aus fortfahren, wenn er weiter iteriert wird.

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

Es werden keine Werte im Array-Iterator-Objekt, das von `values()` zurückgegeben wird, gespeichert. Stattdessen speichert es die Adresse des Arrays, das bei der Erstellung verwendet wurde, und liest den derzeit besuchten Index bei jeder Iteration. Daher hängt die Iterationsausgabe von dem Wert ab, der zu diesem Zeitpunkt an diesem Index gespeichert ist. Wenn sich die Werte im Array ändern, ändern sich auch die Werte des Array-Iterator-Objekts.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Anders als bei [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt nicht die Länge des Arrays zum Zeitpunkt seiner Erstellung, sondern liest sie bei jeder Iteration. Wächst das Array während der Iteration, besucht der Iterator auch die neuen Elemente. Dies kann zu endlosen Schleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iteration lückenhafter Arrays

`values()` besucht leere Stellen, als wären sie `undefined`.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufrufen von values() auf Nicht-Array-Objekten

Die `values()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist.

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
- [Leitfaden zu indizierten Sammlungen (Indexed collections)](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iteration-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
