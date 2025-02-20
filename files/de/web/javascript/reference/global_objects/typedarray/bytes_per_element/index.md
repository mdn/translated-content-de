---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`TypedArray.BYTES_PER_ELEMENT`** statische Dateneigenschaft stellt die Größe in Bytes jedes Elements in einem Typed Array dar.

{{InteractiveExample("JavaScript Demo: TypedArray.BYTES_PER_ELEMENT", "shorter")}}

```js interactive-example
console.log(Float64Array.BYTES_PER_ELEMENT);
// Expected output: 8

console.log(Int8Array.BYTES_PER_ELEMENT);
// Expected output: 1
```

## Wert

Eine Zahl, deren Wert vom Typ des `TypedArray` abhängt.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`TypedArray`-Objekte unterscheiden sich in der Anzahl der Bytes pro Element und in der Art und Weise, wie die Bytes interpretiert werden. Die Konstante `BYTES_PER_ELEMENT` enthält die Anzahl der Bytes, die jedes Element im gegebenen `TypedArray` besitzt.

Die Eigenschaft `BYTES_PER_ELEMENT` ist sowohl eine _Instanzeigenschaft_ als auch eine _statische Eigenschaft_. Sie ist sowohl auf den Unterklassenkonstruktoren von `TypedArray` als auch auf Instanzen dieser Konstruktoren verfügbar.

Als Instanzeigenschaft ist `BYTES_PER_ELEMENT` auf dem `prototype` des Konstruktors definiert.

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

Als Instanzeigenschaft:

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

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
