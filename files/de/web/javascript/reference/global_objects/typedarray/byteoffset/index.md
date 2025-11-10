---
title: TypedArray.prototype.byteOffset
short-title: byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

Die **`byteOffset`**-Zugriffseigenschaft von {{jsxref("TypedArray")}}-Instanzen gibt den Offset (in Bytes) dieses typisierten Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück.

## Beschreibung

Die `byteOffset`-Eigenschaft ist eine Zugriffseigenschaft, deren set-Zugriffsfunktionswert `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das typisierte Array erstellt wird und kann nicht verändert werden. Der `byteOffset` wird jedoch 0, wenn der zugrunde liegende Puffer so neu dimensioniert wird, dass der betrachtete Bereich nicht mehr gültig ist.

## Beispiele

### Verwendung der byteOffset-Eigenschaft

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 (no offset specified)

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 (as specified when constructing Uint8Array)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteOffset; // 4
buffer2.resize(3);
uint8lengthTracking.byteOffset; // 0 (viewed range is no longer valid)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
