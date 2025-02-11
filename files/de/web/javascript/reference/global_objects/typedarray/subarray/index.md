---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`subarray()`** von {{jsxref("TypedArray")}}-Instanzen gibt ein neues getyptes Array zurück, das auf dem gleichen {{jsxref("ArrayBuffer")}}-Speicher basiert und die gleichen Elementtypen wie dieses getypte Array hat. Der Anfangsoffset ist **inklusive**, der Endoffset ist **exklusiv**.

{{InteractiveExample("JavaScript Demo: TypedArray.subarray()")}}

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
  - : Element, bei dem begonnen wird. Der Offset ist inklusive. Das gesamte Array wird in die neue Ansicht aufgenommen, wenn dieser Wert nicht angegeben ist.
- `end` {{optional_inline}}
  - : Element, bei dem geendet wird. Der Offset ist exklusiv. Wenn nicht angegeben, werden alle Elemente vom angegebenen `begin` bis zum Ende des Arrays in die neue Ansicht aufgenommen.

### Rückgabewert

Ein neues {{jsxref("TypedArray")}}-Objekt.

## Beschreibung

Der durch `begin` und `end` angegebene Bereich wird auf den gültigen Indexbereich für das aktuelle Array begrenzt; wenn die berechnete Länge des neuen Arrays negativ wäre, wird sie auf null gesetzt. Wenn entweder `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays aus statt vom Anfang.

Beachten Sie auch, dass hierdurch eine neue Ansicht auf den vorhandenen Buffer erstellt wird; Änderungen am Inhalt des neuen Objekts wirken sich auf das ursprüngliche Objekt aus und umgekehrt.

## Beispiele

### Verwendung der Methode subarray()

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

- [Polyfill von `TypedArray.prototype.subarray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
