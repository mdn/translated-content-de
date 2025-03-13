---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("TypedArray")}}-Instanzen erstellt ein neues typisiertes Array, das mit den Ergebnissen einer bereitgestellten Funktion gefüllt wird, die auf jedes Element des aufrufenden typisierten Arrays angewendet wird. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.map()")}}.

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
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Der Rückgabewert wird als einzelnes Element in das neue typisierte Array eingefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `map()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues typisiertes Array, bei dem jedes Element das Ergebnis der Rückruffunktion ist.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.map()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Ein typisiertes Array zu einem typisierten Array von Quadratwurzeln abbilden

Der folgende Code nimmt ein typisiertes Array und erstellt ein neues typisiertes Array, das die Quadratwurzeln der Zahlen im ersten typisierten Array enthält.

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots is now: Uint8Array [1, 2, 3],
// numbers is still Uint8Array [1, 4, 9]
```

### Ein typisiertes Array von Zahlen mithilfe einer Funktion mit einem Argument abbilden

Der folgende Code zeigt, wie `map()` funktioniert, wenn eine Funktion, die ein Argument erfordert, damit verwendet wird. Das Argument wird automatisch jedem Element des typisierten Arrays zugewiesen, während `map()` durch das ursprüngliche typisierte Array schleift.

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Map")}}
