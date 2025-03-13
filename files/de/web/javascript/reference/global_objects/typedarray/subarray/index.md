---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`subarray()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt ein neues typisiertes Array
auf demselben {{jsxref("ArrayBuffer")}}-Speicher und mit denselben Elementtypen wie dieses
typisierte Array zurück. Der Startversatz ist **inklusiv** und der Endversatz ist **exklusiv**.

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
  - : Element, bei dem begonnen wird. Der Versatz ist inklusiv. Das gesamte Array wird in
    die neue Ansicht einbezogen, falls dieser Wert nicht angegeben ist.
- `end` {{optional_inline}}
  - : Element, bei dem geendet wird. Der Versatz ist exklusiv. Wenn nicht angegeben, werden alle Elemente vom
    durch `begin` spezifizierten bis zum Ende des Arrays in die
    neue Ansicht einbezogen.

### Rückgabewert

Ein neues {{jsxref("TypedArray")}}-Objekt.

## Beschreibung

Der Bereich, der durch `begin` und `end` angegeben ist,
wird auf den gültigen Indexbereich für das aktuelle Array beschränkt; wenn die berechnete Länge des
neuen Arrays negativ wäre, wird es auf Null beschränkt. Wenn entweder
`begin` oder `end` negativ ist, bezieht sich dies auf
einen Index vom Ende des Arrays anstatt vom Anfang.

Beachten Sie auch, dass hierbei eine neue Ansicht des vorhandenen Puffers erstellt wird; Änderungen an den Inhalten des neuen
Objekts wirken sich auf das ursprüngliche Objekt aus und umgekehrt.

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
- [Leitfaden zu JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
