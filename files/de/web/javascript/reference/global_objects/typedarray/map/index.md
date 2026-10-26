---
title: TypedArray.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`map()`** von {{jsxref("TypedArray")}}-Instanzen erstellt ein neues typisiertes Array, dessen Elemente die Ergebnisse des Aufrufs einer bereitgestellten Funktion für jedes Element des aufrufenden typisierten Arrays sind. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.map()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.map()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([25, 36, 49]);
const roots = uint8.map(Math.sqrt);

console.log(roots);
// Expected output: Uint8Array [5, 6, 7]
```

## Syntax

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element des typisierten Arrays ausgeführt wird. Ihr Rückgabewert wird dem neuen typisierten Array als einzelnes Element hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `map()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues typisiertes Array, dessen Elemente jeweils das Ergebnis der Callback-Funktion sind.

## Beschreibung

Weitere Informationen finden Sie unter {{jsxref("Array.prototype.map()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Ein typisiertes Array in ein typisiertes Array mit Quadratwurzeln umwandeln

Der folgende Code nimmt ein typisiertes Array und erstellt ein neues typisiertes Array, das die Quadratwurzeln der Zahlen im ursprünglichen Array enthält.

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots is now: Uint8Array [1, 2, 3],
// numbers is still Uint8Array [1, 4, 9]
```

### Ein typisiertes Array mit Zahlen mithilfe einer Funktion mit einem Argument umwandeln

Der folgende Code zeigt, wie `map()` funktioniert, wenn eine Funktion verwendet wird, die ein Argument benötigt. Während `map()` das ursprüngliche typisierte Array durchläuft, wird der Funktion automatisch jedes Element des Arrays als Argument übergeben.

```js
const numbers = new Uint8Array([1, 4, 9]);
const doubles = numbers.map((num) => num * 2);
// doubles is now Uint8Array [2, 8, 18]
// numbers is still Uint8Array [1, 4, 9]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.map` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Map")}}
