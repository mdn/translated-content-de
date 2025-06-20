---
title: TypedArray.prototype.subarray()
short-title: subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`subarray()`**-Methode von {{jsxref("TypedArray")}} Instanzen gibt ein neues Typed Array
auf dem gleichen {{jsxref("ArrayBuffer")}} Speicher und mit den gleichen Elementtypen wie dieses
Typed Array zurück. Der Anfangs-Offset ist **inklusive** und der End-Offset ist **exklusiv**.

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
  - : Element, bei dem begonnen werden soll. Der Offset ist inklusiv. Das gesamte Array wird in
    die neue Ansicht einbezogen, wenn dieser Wert nicht angegeben wird.
- `end` {{optional_inline}}
  - : Element, bei dem beendet werden soll. Der Offset ist exklusiv. Wenn nicht angegeben, werden alle Elemente von
    dem durch `begin` spezifizierten bis zum Ende des Arrays in
    die neue Ansicht einbezogen.

### Rückgabewert

Ein neues {{jsxref("TypedArray")}} Objekt.

## Beschreibung

Der durch `begin` und `end` spezifizierte Bereich wird
an den gültigen Indexbereich für das aktuelle Array angepasst; wenn die berechnete Länge des
neuen Arrays negativ wäre, wird sie auf Null begrenzt. Wenn entweder
`begin` oder `end` negativ ist, bezieht es sich auf
einen Index vom Ende des Arrays anstelle des Anfangs.

Beachten Sie auch, dass dies eine neue Ansicht auf den vorhandenen Speicherpuffer erstellt; Änderungen an den Inhalten
des neuen Objekts wirken sich auf das ursprüngliche Objekt aus und umgekehrt.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
