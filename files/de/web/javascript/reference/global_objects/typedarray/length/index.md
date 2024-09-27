---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`length`** Accessor-Eigenschaft von {{jsxref("TypedArray")}} Instanzen gibt die Länge (in Elementen) dieses typspezifischen Arrays zurück.

{{EmbedInteractiveExample("pages/js/typedarray-length.html", "shorter")}}

## Beschreibung

Die `length` Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn ein _TypedArray_ erstellt wird und kann nicht geändert werden. Wenn im _TypedArray_ kein `byteOffset` oder `length` angegeben ist, wird die Länge des referenzierten {{jsxref("ArrayBuffer")}} zurückgegeben. _TypedArray_ ist eines der [TypedArray-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Beispiele

### Verwendung der `length` Eigenschaft

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (as specified when constructing the Uint8Array)

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
