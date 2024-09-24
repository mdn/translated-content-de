---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`set()`**-Methode von Instanzen des {{jsxref("TypedArray")}} speichert mehrere Werte im typisierten
Array und liest die Eingabewerte aus einem angegebenen Array.

{{EmbedInteractiveExample("pages/js/typedarray-set.html")}}

## Syntax

```js-nolint
set(array)
set(array, targetOffset)

set(typedarray)
set(typedarray, targetOffset)
```

### Parameter

- `array`
  - : Das Array, aus dem Werte kopiert werden. Alle Werte aus dem Quellarray werden in das Zielarray kopiert, es sei denn, die Länge des Quellarrays plus der Zieloffset übersteigt die Länge des Zielarrays, in diesem Fall wird eine Ausnahme ausgelöst.
- `typedarray`
  - : Wenn das Quellarray ein typisiertes Array ist, können die beiden Arrays denselben zugrunde liegenden {{jsxref("ArrayBuffer")}} teilen; die JavaScript-Engine wird den Quellenbereich des Puffers intelligent **in den** Zielbereich kopieren.
- `targetOffset` {{optional_inline}}
  - : Der Offset im Zielarray, bei dem begonnen wird, Werte aus dem Quellarray zu schreiben. Wenn dieser Wert weggelassen wird, wird 0 angenommen (das bedeutet, dass das Quellarray Werte im Zielarray ab Index 0 überschreiben wird).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein Element wird über das Ende des typisierten Arrays hinaus gespeichert, entweder weil `targetOffset` zu groß ist oder weil `array` oder `typedarray` zu groß ist.
    - `targetOffset` ist negativ.

## Beispiele

### Verwendung von set()

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.set` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
