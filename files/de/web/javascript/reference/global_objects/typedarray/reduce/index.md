---
title: TypedArray.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`reduce()`** Methode von {{jsxref("TypedArray")}} Instanzen führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion auf jedem Element des typisierten Arrays aus, der Reihe nach, und übergibt den Rückgabewert der Berechnung des vorhergehenden Elements. Das endgültige Ergebnis der Ausführung des Reducers über alle Elemente des typisierten Arrays ist ein einzelner Wert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.reduce()")}}

```js interactive-example
const uint8 = new Uint8Array([0, 1, 2, 3]);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(uint8.reduce(sum));
// Expected output: 6
```

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorhergehenden Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, wenn letzteres angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, wenn `initialValue` angegeben ist; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das typisierte Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den der `accumulator` beim ersten Aufruf des Callback initialisiert wird. Wenn `initialValue` angegeben ist, beginnt `callbackFn` die Ausführung mit dem ersten Wert im typisierten Array als `currentValue`. Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf den ersten Wert im typisierten Array initialisiert und `callbackFn` beginnt die Ausführung mit dem zweiten Wert im typisierten Array als `currentValue`. In diesem Fall, wenn das typisierte Array leer ist (sodass kein erster Wert als `accumulator` zurückgegeben werden kann), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der sich ergibt, wenn die "Reducer"-Callback-Funktion über das gesamte typisierte Array durchgeführt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das typisierte Array keine Elemente enthält und `initialValue` nicht angegeben ist.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typisierungs-Array-Instanzen aufgerufen werden.

## Beispiele

### Alle Werte innerhalb eines Arrays summieren

```js
const total = new Uint8Array([0, 1, 2, 3]).reduce((a, b) => a + b);
// total === 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
