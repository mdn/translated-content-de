---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("TypedArray")}} Instanzen erstellt ein neues typisiertes Array, das mit den Ergebnissen einer bereitgestellten Funktion gefüllt ist, die für jedes Element des aufrufenden typisierten Arrays ausgeführt wird. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.map()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-map.html", "shorter")}}

## Syntax

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Der Rückgabewert dieser Funktion wird als einzelnes Element im neuen typisierten Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `map()` angewandt wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues typisiertes Array, bei dem jedes Element das Ergebnis der Callback-Funktion ist.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.map()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen angewendet werden.

## Beispiele

### Zuordnung eines typisierten Arrays zu einem typisierten Array von Quadratwurzeln

Der folgende Code nimmt ein typisiertes Array und erstellt ein neues typisiertes Array, das die Quadratwurzeln der Zahlen im ersten typisierten Array enthält.

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots is now: Uint8Array [1, 2, 3],
// numbers is still Uint8Array [1, 4, 9]
```

### Zuordnung eines typisierten Arrays von Zahlen mit einer Funktion, die ein Argument enthält

Der folgende Code zeigt, wie `map()` funktioniert, wenn eine Funktion mit einem erforderlichen Argument damit verwendet wird. Das Argument wird automatisch jedem Element des typisierten Arrays zugewiesen, während `map()` das ursprüngliche typisierte Array durchläuft.

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

- [Polyfill von `TypedArray.prototype.map` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Map")}}
