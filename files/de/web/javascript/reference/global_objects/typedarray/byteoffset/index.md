---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`byteOffset`**-Zugriffseigenschaft von {{jsxref("TypedArray")}}-Instanzen gibt den Offset (in Bytes) dieses typisierten Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück.

## Beschreibung

Die `byteOffset`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn ein _TypedArray_ erstellt wird und kann nicht geändert werden. _TypedArray_ ist eines der [TypedArray-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Beispiele

### Verwendung der byteOffset-Eigenschaft

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 (no offset specified)

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 (as specified when constructing Uint8Array)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
