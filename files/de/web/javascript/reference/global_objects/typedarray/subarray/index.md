---
title: TypedArray.prototype.subarray()
short-title: subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`subarray()`** von {{jsxref("TypedArray")}}-Instanzen gibt ein neues typisiertes Array zurück, das denselben {{jsxref("ArrayBuffer")}}-Speicher und denselben Elementtyp wie das ursprüngliche typisierte Array verwendet. Der Anfangsindex ist **einschließlich**, der Endindex **ausschließlich**.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.subarray()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.subarray(1, 3));
// Expected output: Uint8Array [20, 30]

console.log(uint8.subarray(1));
// Expected output: Uint8Array [20, 30, 40, 50]
```

## Syntax

```js-nolint
subarray()
subarray(begin)
subarray(begin, end)
```

### Parameter

- `begin` {{optional_inline}}
  - : Element, bei dem der Bereich beginnt. Der Index ist einschließlich. Wird dieser Wert nicht angegeben, umfasst die neue Ansicht das gesamte Array.
- `end` {{optional_inline}}
  - : Element, bei dem der Bereich endet. Der Index ist ausschließlich. Wird dieser Wert nicht angegeben, umfasst die neue Ansicht alle Elemente ab dem durch `begin` angegebenen Element bis zum Ende des Arrays.

### Rückgabewert

Ein neues {{jsxref("TypedArray")}}-Objekt.

## Beschreibung

Der durch `begin` und `end` angegebene Bereich wird auf den gültigen Indexbereich des aktuellen Arrays begrenzt. Wäre die berechnete Länge des neuen Arrays negativ, wird sie auf null gesetzt. Ist `begin` oder `end` negativ, bezieht sich der Wert auf einen Index vom Ende des Arrays aus statt vom Anfang.

Beachten Sie außerdem, dass eine neue Ansicht auf den vorhandenen Buffer erstellt wird. Änderungen am Inhalt des neuen Objekts wirken sich auf das ursprüngliche Objekt aus und umgekehrt.

## Beispiele

### Die Methode subarray() verwenden

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

const sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.subarray` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
