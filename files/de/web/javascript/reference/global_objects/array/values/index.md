---
title: Array.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`values()`** von {{jsxref("Array")}}-Instanzen gibt ein neues _[Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück, das über die Werte der einzelnen Elemente im Array iteriert.

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

Bei [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behandelt die Methode `values()` leere Positionen bei der Iteration so, als hätten sie den Wert `undefined`.

Die Methode `values()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat.

## Beispiele

### Iteration mit einer for...of-Schleife

Da `values()` einen iterierbaren Iterator zurückgibt, können Sie mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife darüber iterieren.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### Iteration mit next()

Da der Rückgabewert auch ein Iterator ist, können Sie seine Methode `next()` direkt aufrufen.

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

### Wiederverwendung des iterierbaren Objekts

> [!WARNING]
> Das Array-Iterator-Objekt sollte nur einmal verwendet werden. Verwenden Sie es nicht erneut.

Das von `values()` zurückgegebene iterierbare Objekt kann nicht wiederverwendet werden. Wenn `next().done = true` oder `currentIndex > length` gilt, [endet die `for...of`-Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols). Eine weitere Iteration über das Objekt hat dann keine Wirkung.

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

Wenn Sie die Iteration mit einer [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung vorzeitig beenden, kann der Iterator bei einer erneuten Iteration an der aktuellen Position fortfahren.

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

Das von `values()` zurückgegebene Array-Iterator-Objekt speichert keine Werte. Stattdessen speichert es eine Referenz auf das Array, mit dem es erstellt wurde, und liest bei jedem Iterationsschritt den jeweils besuchten Index aus. Die ausgegebenen Werte hängen daher davon ab, welcher Wert zum Zeitpunkt des jeweiligen Schritts an diesem Index gespeichert ist. Ändern sich die Werte im Array, ändern sich auch die vom Array-Iterator-Objekt ausgegebenen Werte.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Anders als [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt die Länge des Arrays nicht zum Zeitpunkt seiner Erstellung, sondern liest sie bei jedem Iterationsschritt erneut. Wächst das Array während der Iteration, besucht der Iterator daher auch die neuen Elemente. Dies kann zu Endlosschleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iteration über Arrays mit Lücken

`values()` besucht leere Positionen so, als enthielten sie `undefined`.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufruf von values() für Objekte, die keine Arrays sind

Die Methode `values()` liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.values` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.values` von es-shims](https://www.npmjs.com/package/array.prototype.values)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
