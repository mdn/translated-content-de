---
title: Iterator.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/includes
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Die Methode **`includes()`** von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.includes()")}}: Sie gibt `true` zurück, wenn sie ein Element findet, das dem angegebenen Wert entspricht. Andernfalls gibt sie `false` zurück, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden.

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der zu suchende Wert.
- `fromIndex` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Suche beginnen soll. Muss eine nicht negative ganze Zahl, `Infinity` oder `undefined` sein. Wenn `fromIndex` größer oder gleich der Anzahl der vom Iterator erzeugten Elemente ist (einschließlich des Falls, dass `fromIndex` `Infinity` ist), gibt die Methode nach dem Erschöpfen des Iterators immer `false` zurück. Wenn `fromIndex` `undefined` ist, lautet der Standardwert `0`.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` innerhalb des Iterators gefunden wird (oder innerhalb des Teils des Iterators, der bei `fromIndex` beginnt, falls angegeben).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `fromIndex` keines der folgenden Elemente ist: eine ganze Zahl, `Infinity`, `-Infinity` oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fromIndex` negativ ist.

## Beschreibung

Die Methode `includes()` vergleicht `searchElement` mit Elementen des Arrays mithilfe des [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus funktioniert wie strikte Gleichheit `===` (wobei `-0` und `+0` als gleich betrachtet werden), mit der Ausnahme, dass {{jsxref("NaN")}} als gleich zu sich selbst betrachtet wird.

Im Gegensatz zu `Array.prototype.includes()` darf der Parameter `fromIndex` von `Iterator.prototype.includes()` nicht negativ sein, da der Iterator keine bekannte Länge hat. Die Typvalidierung ist außerdem strenger: Nicht-ganzzahlige Werte werden nicht auf ganze Zahlen gekürzt.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden besteht darin, dass sie lazy sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf erzeugen. Dadurch werden unnötige Berechnungen vermieden, und sie können auch mit unendlichen Iteratoren verwendet werden. Bei unendlichen Iteratoren gibt `includes()` `true` zurück, sobald die erste Übereinstimmung gefunden wird. Wenn der Wert nie gefunden wird, gibt die Methode niemals zurück.

Der Aufruf von `includes()` schließt stets den zugrunde liegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator wird niemals in einem halb abgeschlossenen Zustand belassen.

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

Die Methode schließt den Iterator nach der Rückgabe.

```js
const seq = fibonacci();
console.log(seq.includes(8)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

### fromIndex verwenden

`fromIndex` gibt die Anzahl der Elemente an, die vom Anfang übersprungen werden sollen. Dies entspricht dem Aufruf von `drop(fromIndex).includes(searchElement)`.

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

Wenn `fromIndex` größer oder gleich der verfügbaren Elemente ist, wird `false` zurückgegeben.

```js
["a", "b", "c"].values().includes("a", 3); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [es-shims-Polyfill von `Iterator.prototype.includes`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.includes()")}}
