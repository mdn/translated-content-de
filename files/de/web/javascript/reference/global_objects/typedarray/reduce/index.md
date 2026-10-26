---
title: TypedArray.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reduce()`** von {{jsxref("TypedArray")}}-Instanzen führt für jedes Element des typisierten Arrays der Reihe nach eine vom Benutzer bereitgestellte „Reducer“-Callback-Funktion aus. Dabei wird jeweils das Ergebnis der Berechnung für das vorherige Element übergeben. Das Endergebnis nach der Verarbeitung aller Elemente des typisierten Arrays ist ein einzelner Wert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

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
  - : Eine Funktion, die für jedes Element des typisierten Arrays ausgeführt wird. Ihr Rückgabewert wird beim nächsten Aufruf von `callbackFn` zum Wert des Parameters `accumulator`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben wurde; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, falls `initialValue` angegeben wurde; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist sein Wert `0`, falls `initialValue` angegeben wurde, andernfalls `1`.
    - `array`
      - : Das typisierte Array, für das `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf der Callback-Funktion initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert des typisierten Arrays als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Wert des typisierten Arrays initialisiert und `callbackFn` beginnt mit dem zweiten Wert als `currentValue`. Ist das typisierte Array in diesem Fall leer (sodass kein erster Wert für `accumulator` vorhanden ist), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der sich ergibt, nachdem die „Reducer“-Callback-Funktion das gesamte typisierte Array verarbeitet hat.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das typisierte Array keine Elemente enthält und `initialValue` nicht angegeben wurde.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.reduce()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Alle Werte in einem Array summieren

```js
const total = new Uint8Array([0, 1, 2, 3]).reduce((a, b) => a + b);
// total === 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.reduce` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
