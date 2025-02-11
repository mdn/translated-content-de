---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("TypedArray")}}-Instanzen führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes Element des Typed Arrays in Reihenfolge aus und übergibt dabei den Rückgabewert aus der Berechnung des vorherigen Elements. Das Endergebnis des Ausführens der Reducer-Funktion auf allen Elementen des Typed Arrays ist ein einzelner Wert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.reduce()")}}

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
  - : Eine Funktion, die für jedes Element im Typed Array ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf hat er den Wert von `initialValue`, falls dieser angegeben wurde; andernfalls hat er den Wert von `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf hat er den Wert von `array[0]`, falls `initialValue` angegeben wurde; andernfalls hat er den Wert von `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Typed Array. Beim ersten Aufruf beträgt sein Wert `0`, falls `initialValue` angegeben wurde, andernfalls `1`.
    - `array`
      - : Das Typed Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callbacks initialisiert wird.
    Wird `initialValue` angegeben, beginnt die Ausführung von `callbackFn` mit dem ersten Wert im Typed Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben wird, wird `accumulator` mit dem ersten Wert im Typed Array initialisiert, und `callbackFn` beginnt die Ausführung mit dem zweiten Wert im Typed Array als `currentValue`. In diesem Fall wird eine Fehlermeldung ausgegeben, wenn das Typed Array leer ist (da kein erster Wert als `accumulator` zurückgegeben werden kann).

### Rückgabewert

Der Wert, der entsteht, wenn die "Reducer"-Callback-Funktion über das gesamte Typed Array abgeschlossen wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Typed Array keine Elemente enthält und `initialValue` nicht angegeben wurde.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typed Arrays angewendet werden.

## Beispiele

### Alle Werte innerhalb eines Arrays aufsummieren

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
