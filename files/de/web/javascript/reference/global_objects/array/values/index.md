---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`values()`** Methode von {{jsxref("Array")}} Instanzen gibt ein neues _[Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ Objekt zurück, das den Wert jedes Elements im Array durchläuft.

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

Wenn `values()` auf [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, durchläuft die Methode leere Stellen, als ob sie den Wert `undefined` hätten.

Die `values()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integerindizierte Eigenschaften hat.

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

Da der Rückgabewert auch ein Iterator ist, können Sie seine `next()` Methode direkt aufrufen.

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
> Das Array-Iterator-Objekt sollte ein einmalig verwendbares Objekt sein. Wiederverwenden Sie es nicht.

Das von `values()` zurückgegebene Iterable ist nicht wiederverwendbar. Wenn `next().done = true` oder `currentIndex > length`, [endet die `for...of` Schleife](/de/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols), und weiteres Durchlaufen hat keine Wirkung.

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

Wenn Sie eine [`break`](/de/docs/Web/JavaScript/Reference/Statements/break) Anweisung verwenden, um die Iteration vorzeitig zu beenden, kann der Iterator ab der aktuellen Position fortgesetzt werden, wenn Sie ihn weiter durchlaufen.

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

Es werden keine Werte im Array-Iterator-Objekt gespeichert, das von `values()` zurückgegeben wird; stattdessen speichert es die Adresse des Arrays, das bei seiner Erstellung verwendet wurde, und liest den aktuell besuchten Index bei jeder Iteration. Daher hängt die Ausgabe der Iteration von dem Wert ab, der zum Zeitpunkt des Durchlaufs an diesem Index gespeichert ist. Wenn sich die Werte im Array ändern, ändern sich auch die vom Array-Iterator-Objekt zurückgegebenen Werte.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Anders als [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) speichert das Array-Iterator-Objekt die Länge des Arrays nicht zur Zeit seiner Erstellung, sondern liest sie bei jeder Iteration einmal. Daher besucht der Iterator neue Elemente, wenn das Array während der Iteration wächst. Dies kann zu Endlosschleifen führen.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### Iteration über spärliche Arrays

`values()` wird leere Stellen besuchen, als ob sie `undefined` sind.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Aufrufen von values() auf Nicht-Array-Objekten

Die `values()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl ist, die kleiner als `length` ist.

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
- Leitfaden zu [Indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
