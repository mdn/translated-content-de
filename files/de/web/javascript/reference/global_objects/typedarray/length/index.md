---
title: TypedArray.prototype.length
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

Die **`length`** Zugriffs-Eigenschaft von {{jsxref("TypedArray")}} Instanzen gibt die Länge (in Elementen) dieses typisierten Arrays zurück.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.length", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.length);
// Expected output: 6
```

## Beschreibung

Die `length`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Wenn das typisierte Array [längenverfolgend](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) ist, dann hängt seine Länge von der Länge des zugrunde liegenden Puffers ab und kann sich ändern, wenn der Puffer neu dimensioniert wird. Andernfalls wird der Wert beim Konstruktion des typisierten Arrays festgelegt und kann nicht geändert werden. Unabhängig davon, ob es längenverfolgend ist oder nicht, wird die `length` zu 0, wenn der zugrunde liegende Puffer so neu dimensioniert wird, dass der betrachtete Bereich nicht mehr gültig ist.

## Beispiele

### Verwendung der length-Eigenschaft

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.length; // 5 (as specified when constructing the Uint8Array)

const uint8offset = new Uint8Array(buffer, 2);
uint8offset.length; // 6 (due to the offset of the constructed Uint8Array)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.length; // 12 (16 - 4)
buffer2.resize(20);
uint8lengthTracking.length; // 16 (20 - 4)
buffer2.resize(3);
uint8lengthTracking.length; // 0 (viewed range is no longer valid)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
