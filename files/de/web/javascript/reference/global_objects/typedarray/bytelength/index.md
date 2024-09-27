---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`byteLength`** Zugriffseigenschaft von {{jsxref("TypedArray")}} Instanzen gibt die Länge (in Bytes) dieses typisierten Arrays zurück.

{{EmbedInteractiveExample("pages/js/typedarray-bytelength.html", "shorter")}}

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn ein _TypedArray_ erstellt wird und kann nicht geändert werden. Wenn das _TypedArray_ keinen `byteOffset` oder eine `length` angibt, wird die `length` des referenzierten `ArrayBuffer` zurückgegeben. _TypedArray_ ist eines der [TypedArray objects](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Beispiele

### Verwendung der Eigenschaft byteLength

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (as specified when constructing the Uint8Array)

const uint8offSet = new Uint8Array(buffer, 2);
uint8offSet.byteLength; // 6 (due to the offset of the constructed Uint8Array)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typed arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
