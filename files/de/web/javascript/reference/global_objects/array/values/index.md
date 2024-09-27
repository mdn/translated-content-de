---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`values()`**-Methode von {{jsxref("Array")}} Instanzen gibt ein neues _[Array-Iteratorenobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das über den Wert jedes Elements des Arrays iteriert.

{{EmbedInteractiveExample("pages/js/array-values.html")}}

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

Wenn auf [lückenhafte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet, iteriert die `values()`-Methode leere Slots, als hätten sie den Wert `undefined`.

Die `values()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Schlüsselwerteigenschaften hat.

## Beispiele

### Iteration mit einer for...of-Schleife

Da `values()` einen iterierbaren Iterator zurückgibt, können Sie eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, um darüber zu iterieren.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### Iteration mit next()

Da der Rückgabewert auch ein Iterator ist, können Sie dessen `next()`-Methode direkt aufrufen.

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

### Wiederverwendung des Iterierbares

> [!WARNING]
> Das Array-Iterator-Objekt sollte einmalig verwendet werden. Verwenden Sie es nicht erneut.

Das von `values()` zurückgegebene Iterierbare ist nicht wiederverwendbar. Wenn `next().done = true` oder `currentIndex > length` ist, [endet die `for...of`-Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols), und weiteres Iterieren hat keinen Effekt.

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

Wenn Sie eine [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden, um die Iteration vorzeitig zu beenden, kann der Iterator die Iteration von der aktuellen Position aus fortsetzen.

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

Es werden keine Werte im Array-Iterator-Objekt gespeichert, das von `values()` zurückgegeben wird; stattdessen speichert es die Adresse des Arrays, das bei seiner Erstellung verwendet wurde, und liest den aktuell besuchten Index bei jeder Iteration. Daher hängt die Ausgabe der Iteration von dem Wert ab, der zu diesem Zeitpunkt in diesem Index gespeichert ist. Wenn sich die Werte im Array ändern, ändern sich die Werte des Array-Iterator-Objekts ebenfalls.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Im Gegensatz zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt nicht die Länge des Arrays zum Zeitpunkt seiner Erstellung, sondern liest sie bei jeder Iteration erneut. Daher, wenn das Array während der Iteration wächst, wird der Iterator auch die neuen Elemente besuchen. Dies kann zu Endlosschleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iteration über lückenhafte Arrays

`values()` wird leere Slots besuchen, als wären sie `undefined`.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufrufen von values() bei Nicht-Array-Objekten

Die `values()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nichtnegativer Integer kleiner als `length` ist.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
