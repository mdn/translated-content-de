---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`byteLength`** Accessor-Eigenschaft von {{jsxref("TypedArray")}} Instanzen gibt die Länge (in Bytes) dieses typisierten Arrays zurück.

{{EmbedInteractiveExample("pages/js/typedarray-bytelength.html", "shorter")}}

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn ein _TypedArray_ konstruiert wird und kann nicht geändert werden. Wenn das _TypedArray_ keinen `byteOffset` oder eine `length` angibt, wird die `length` des referenzierten `ArrayBuffer` zurückgegeben. _TypedArray_ ist eines der [TypedArray-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Beispiele

### Verwendung der byteLength-Eigenschaft

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (entspricht der Byte-Länge des Puffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (wie beim Erstellen des Uint8Array angegeben)

const uint8offSet = new Uint8Array(buffer, 2);
uint8offSet.byteLength; // 6 (aufgrund des Offsets des konstruierten Uint8Array)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- {{jsxref("TypedArray")}}
