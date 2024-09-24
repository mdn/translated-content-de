---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("TypedArray")}}-Instanzen führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes Element des typisierten Arrays in der Reihenfolge aus und übergibt dabei den Rückgabewert der Berechnung des vorhergehenden Elements. Das Endergebnis des Ausführens des Reducers über alle Elemente des typisierten Arrays ist ein einzelner Wert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element des typisierten Arrays ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert der Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist ihr Wert `initialValue`, falls Letzteres spezifiziert ist; andernfalls ist ihr Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist ihr Wert `array[0]`, falls `initialValue` spezifiziert ist; andernfalls ist ihr Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist ihr Wert `0`, falls `initialValue` spezifiziert ist, andernfalls `1`.
    - `array`
      - : Das typisierte Array, auf das `reduce()` angewendet wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den `accumulator` beim ersten Aufruf des Callbacks initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt die Ausführung von `callbackFn` mit dem ersten Wert im typisierten Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf den ersten Wert im typisierten Array initialisiert, und `callbackFn` beginnt mit dem zweiten Wert im typisierten Array als `currentValue`. In diesem Fall wird ein Fehler ausgelöst, wenn das typisierte Array leer ist (sodass kein erster Wert als `accumulator` zurückgegeben werden kann).

### Rückgabewert

Der Wert, der sich aus der vollständigen Ausführung der "Reducer"-Callback-Funktion über das gesamte typisierte Array ergibt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das typisierte Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
