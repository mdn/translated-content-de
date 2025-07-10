---
title: TypedArray.prototype.subarray()
short-title: subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`subarray()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt ein neues typisiertes Array
im selben {{jsxref("ArrayBuffer")}}-Speicher und mit den gleichen Elementtypen wie dieses
typisierte Array zurück. Der Startversatz ist **inklusive** und der Endversatz ist **exklusiv**.

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
  - : Element, bei dem begonnen wird. Der Versatz ist inklusive. Das gesamte Array wird in
    der neuen Ansicht enthalten sein, wenn dieser Wert nicht angegeben wird.
- `end` {{optional_inline}}
  - : Element, bei dem geendet wird. Der Versatz ist exklusiv. Wenn nicht angegeben, werden alle Elemente von
    dem durch `begin` angegebenen bis zum Ende des Arrays in
    der neuen Ansicht enthalten sein.

### Rückgabewert

Ein neues {{jsxref("TypedArray")}}-Objekt.

## Beschreibung

Der durch `begin` und `end` angegebene Bereich
wird auf den gültigen Indexbereich für das aktuelle Array beschränkt; wenn die berechnete Länge des
neuen Arrays negativ wäre, wird sie auf Null beschränkt. Wenn entweder
`begin` oder `end` negativ ist, bezieht es sich
auf einen Index vom Ende des Arrays anstatt vom Anfang.

Es ist auch zu beachten, dass dies eine neue Ansicht auf den bestehenden Puffer erstellt; Änderungen am Inhalt des neuen
Objekts wirken sich auf das ursprüngliche Objekt aus und umgekehrt.

## Beispiele

### Verwendung der subarray()-Methode

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
