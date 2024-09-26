---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die statische Daten-Eigenschaft **`TypedArray.BYTES_PER_ELEMENT`** gibt die Größe in Bytes jedes Elements in einem typisierten Array an.

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html", "shorter")}}

## Wert

Eine Zahl, deren Wert vom Typ des `TypedArray` abhängt.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`TypedArray`-Objekte unterscheiden sich in der Anzahl der Bytes pro Element und in der Art und Weise, wie die Bytes interpretiert werden. Die Konstante `BYTES_PER_ELEMENT` enthält die Anzahl der Bytes, die jedes Element im gegebenen `TypedArray` hat.

Die Eigenschaft `BYTES_PER_ELEMENT` ist sowohl eine _Instanz-Eigenschaft_ als auch eine _statische Eigenschaft_. Sie ist sowohl in den Konstruktoren der `TypedArray`-Unterklassen als auch in Instanzen dieser Konstruktoren verfügbar.

Als Instanz-Eigenschaft ist `BYTES_PER_ELEMENT` auf dem `prototype` des Konstruktors definiert.

```js
console.log(Object.hasOwn(Int8Array.prototype, "BYTES_PER_ELEMENT")); // true
```

## Beispiele

### Verwendung von BYTES_PER_ELEMENT

Als statische Eigenschaft:

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Float16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
BigInt64Array.BYTES_PER_ELEMENT; // 8
BigUint64Array.BYTES_PER_ELEMENT; // 8
```

Als Instanz-Eigenschaft:

```js
new Int8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8ClampedArray([]).BYTES_PER_ELEMENT; // 1
new Int16Array([]).BYTES_PER_ELEMENT; // 2
new Uint16Array([]).BYTES_PER_ELEMENT; // 2
new Float16Array([]).BYTES_PER_ELEMENT; // 2
new Int32Array([]).BYTES_PER_ELEMENT; // 4
new Uint32Array([]).BYTES_PER_ELEMENT; // 4
new Float32Array([]).BYTES_PER_ELEMENT; // 4
new Float64Array([]).BYTES_PER_ELEMENT; // 8
new BigInt64Array([]).BYTES_PER_ELEMENT; // 8
new BigUint64Array([]).BYTES_PER_ELEMENT; // 8
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}