---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`reduce()`**-Methode von Instanzen des {{jsxref("TypedArray")}} führt eine vom Benutzer bereitgestellte „Reducer“-Callback-Funktion bei jedem Element des Typed Arrays in Reihenfolge aus, wobei der Rückgabewert der Berechnung des vorhergehenden Elements übergeben wird. Das Endergebnis der Durchführung des Reducers über alle Elemente des Typed Arrays ist ein einzelner Wert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Typed Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls letzteres angegeben ist, andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, falls `initialValue` angegeben ist, andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Typed Array. Beim ersten Aufruf ist sein Wert `0`, falls `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das Typed Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` initialisiert wird, wenn der Callback zum ersten Mal aufgerufen wird.
    Falls `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im Typed Array als `currentValue`.
    Falls `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Wert im Typed Array initialisiert und `callbackFn` beginnt mit dem zweiten Wert im Typed Array als `currentValue`. In diesem Fall, falls das Typed Array leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), wird ein Fehler geworfen.

### Rückgabewert

Der Wert, der aus dem vollständigen Ablauf der "Reducer"-Callback-Funktion über das gesamte Typed Array resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Typed Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur für Typed Array Instanzen aufgerufen werden.

## Beispiele

### Alle Werte innerhalb eines Arrays addieren

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
