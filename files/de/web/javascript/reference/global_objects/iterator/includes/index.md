---
title: Iterator.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/includes
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`includes()`**-Methode von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.includes()")}}: Sie gibt `true` zurück, wenn sie ein Element findet, das dem angegebenen Wert entspricht. Andernfalls gibt sie `false` zurück, wenn der Iterator durchlaufen wurde, ohne ein solches Element zu finden.

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der Wert, nach dem gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Der nullbasierte Index, ab dem gesucht werden soll. Muss eine nicht negative Ganzzahl, `Infinity` oder `undefined` sein. Wenn `fromIndex` größer oder gleich der Anzahl der vom Iterator erzeugten Elemente ist (auch wenn `fromIndex` gleich `Infinity` ist), gibt die Methode nach dem vollständigen Durchlaufen des Iterators immer `false` zurück. Wenn `fromIndex` gleich `undefined` ist, wird standardmäßig `0` verwendet.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` im Iterator gefunden wird (oder, falls angegeben, in dem bei `fromIndex` beginnenden Teil des Iterators).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `fromIndex` weder eine Ganzzahl noch `Infinity`, `-Infinity` oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fromIndex` negativ ist.

## Beschreibung

Die `includes()`-Methode vergleicht `searchElement` mit den Elementen des Iterators mithilfe des [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus funktioniert wie die strikte Gleichheit `===` (bei der `-0` und `+0` als gleich gelten), mit der Ausnahme, dass {{jsxref("NaN")}} als gleich zu sich selbst gilt.

Anders als bei `Array.prototype.includes()` darf der Parameter `fromIndex` bei `Iterator.prototype.includes()` nicht negativ sein, da die Länge des Iterators nicht bekannt ist. Auch die Typprüfung ist strenger: Werte, die keine Ganzzahlen sind, werden nicht auf Ganzzahlen gekürzt.

Der Hauptvorteil von Iterator-Hilfsmethoden gegenüber Array-Methoden besteht darin, dass sie Werte erst bei Bedarf erzeugen. Dadurch werden unnötige Berechnungen vermieden, und sie können auch mit unendlichen Iteratoren verwendet werden. Bei unendlichen Iteratoren gibt `includes()` `true` zurück, sobald die erste Übereinstimmung gefunden wird. Wenn der Wert nie vorkommt, kehrt die Methode nie zurück.

Ein Aufruf von `includes()` schließt den zugrunde liegenden Iterator immer, auch wenn die Methode vorzeitig zurückkehrt. Der Iterator bleibt nie in einem nur teilweise durchlaufenen Zustand zurück.

## Beispiele

### includes() verwenden

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8)); // true
console.log(fibonacci().take(10).includes(7)); // false
console.log(fibonacci().includes(7)); // Never completes
```

Die Methode schließt den Iterator, bevor sie zurückkehrt.

```js
const seq = fibonacci();
console.log(seq.includes(8)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

### fromIndex verwenden

`fromIndex` gibt an, wie viele Elemente am Anfang übersprungen werden sollen. Dies entspricht dem Aufruf von `drop(fromIndex).includes(searchElement)`.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8, 3)); // true
console.log(fibonacci().includes(8, 10)); // false
```

Wenn `fromIndex` größer oder gleich der Anzahl der verfügbaren Elemente ist, wird `false` zurückgegeben.

```js
["a", "b", "c"].values().includes("a", 3); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.includes` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.includes` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.includes()")}}
