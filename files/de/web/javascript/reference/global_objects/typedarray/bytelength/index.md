---
title: TypedArray.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

Die **`byteLength`** Zugriffs- Eigenschaft von {{jsxref("TypedArray")}} Instanzen gibt die Länge (in Bytes) dieses typisierten Arrays zurück.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.byteLength", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.byteLength);
// Expected output: 6
```

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Wenn das typisierte Array [längenüberwachend](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) ist, hängt seine Länge von der Länge des zugrunde liegenden Puffers ab und kann sich ändern, wenn der Puffer in der Größe verändert wird. Andernfalls wird der Wert beim Erstellen des typisierten Arrays festgelegt und kann nicht geändert werden. Unabhängig davon, ob es sich um eine längenüberwachende Darstellung handelt oder nicht, wird die `byteLength` zu 0, wenn der zugrunde liegende Puffer so verändert wird, dass der betrachtete Bereich nicht mehr gültig ist.

## Beispiele

### Verwendung der byteLength-Eigenschaft

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (as specified when constructing the Uint8Array)

const uint8offset = new Uint8Array(buffer, 2);
uint8offset.byteLength; // 6 (due to the offset of the constructed Uint8Array)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
uint8lengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
uint8lengthTracking.byteLength; // 0 (viewed range is no longer valid)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
