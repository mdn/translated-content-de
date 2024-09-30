---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Int16Array`** typisierte Array repräsentiert ein Array von 16-Bit vorzeichenbehafteten Ganzzahlen in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald das Array erstellt wurde, können Sie auf die Elemente im Array mithilfe der Methoden des Objekts oder mit der standardmäßigen Array-Index-Syntax (durch Verwendung von Klammern) zugreifen.

`Int16Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Int16Array/Int16Array", "Int16Array()")}}
  - : Erstellt ein neues `Int16Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall von `Int16Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Int16Array.prototype` definiert und werden von allen `Int16Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall von `Int16Array`.
- {{jsxref("Object/constructor", "Int16Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int16Array` Instanzen ist der Anfangswert der {{jsxref("Int16Array/Int16Array", "Int16Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten, ein Int16Array zu erstellen

```js
// From a length
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Int16Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
