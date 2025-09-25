---
title: DataView.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

Die **`byteLength`** Zugriffs-Eigenschaft von {{jsxref("DataView")}}-Instanzen gibt die Länge (in Bytes) dieser Ansicht zurück.

{{InteractiveExample("JavaScript Demo: DataView.prototype.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Wenn der `DataView` [length-tracking](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) ist, hängt seine Länge von der Länge des zugrunde liegenden Puffers ab und kann sich ändern, wenn der Puffer neu dimensioniert wird. Andernfalls wird der Wert beim Erstellen des `DataView` festgelegt und kann nicht geändert werden. Unabhängig davon, ob length-tracking oder nicht, wird `byteLength` 0, wenn der zugrunde liegende Puffer so neu dimensioniert wird, dass der angezeigte Bereich nicht mehr gültig ist.

## Beispiele

### Verwendung der byteLength-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
dataviewLengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
dataviewLengthTracking.byteLength; // 0 (viewed range is no longer valid)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
