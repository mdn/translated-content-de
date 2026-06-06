---
title: Iterator.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/includes
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{SeeCompatTable}}

Die **`includes()`**-Methode von {{jsxref("Iterator")}}-Instanzen ist ähnlich wie {{jsxref("Array.prototype.includes()")}}: Sie gibt `true` zurück, wenn sie ein Element findet, das gleich dem angegebenen Wert ist. Andernfalls, wenn der Iterator ausgeschöpft wird, ohne ein solches Element zu finden, gibt er `false` zurück.

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der zu suchende Wert.
- `fromIndex` {{optional_inline}}
  - : Der nullbasierte Index, ab dem die Suche beginnt. Muss eine nicht-negative ganze Zahl, `Infinity` oder `undefined` sein. Wenn `fromIndex` größer oder gleich der Anzahl der vom Iterator erzeugten Elemente ist (einschließlich wenn `fromIndex` `Infinity` ist), gibt die Methode immer `false` zurück, nachdem der Iterator ausgeschöpft ist. Wenn `fromIndex` `undefined` ist, wird es standardmäßig auf `0` gesetzt.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` innerhalb des Iterators gefunden wird (oder dem Teil des Iterators ab `fromIndex`, falls angegeben).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `fromIndex` nicht eine der folgenden ist: eine ganze Zahl, `Infinity`, `-Infinity` oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fromIndex` negativ ist.

## Beschreibung

Die `includes()`-Methode vergleicht `searchElement` mit Elementen des Arrays unter Verwendung des [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus funktioniert wie die strikte Gleichheit `===` (wobei `-0` und `+0` als gleich angesehen werden), mit der Ausnahme, dass {{jsxref("NaN")}} als gleich zu sich selbst betrachtet wird.

Im Gegensatz zu `Array.prototype.includes()` darf der `fromIndex`-Parameter von `Iterator.prototype.includes()` nicht negativ sein, da der Iterator keine bekannte Länge hat. Die Typprüfung ist ebenfalls strenger: Nicht-Ganzzahlwerte werden nicht in ganze Zahlen umgewandelt.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden besteht darin, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht auch die Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `includes()` `true` zurück, sobald das erste übereinstimmende Element gefunden wird. Wenn der Wert nie auftritt, gibt die Methode niemals zurück.

Der Aufruf von `includes()` schließt immer den zugrunde liegenden Iterator, selbst wenn die Methode frühzeitig zurückkehrt. Der Iterator bleibt niemals in einem halbwegs Zustand.

## Beispiele

### Verwendung von includes()

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

Die Methode schließt den Iterator, nachdem sie zurückkehrt.

```js
const seq = fibonacci();
console.log(seq.includes(8)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

### Verwendung von fromIndex

`fromIndex` gibt die Anzahl der Elemente an, die vom Anfang übersprungen werden. Es ist gleichbedeutend mit dem Aufruf von `drop(fromIndex).includes(searchElement)`.

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

Wenn `fromIndex` größer oder gleich den verfügbaren Elementen ist, wird `false` zurückgegeben.

```js
["a", "b", "c"].values().includes("a", 3); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [es-shims polyfill von `Iterator.prototype.includes`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.includes()")}}
