---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MIN_SAFE_INTEGER`** repräsentiert die kleinste sichere Ganzzahl in JavaScript, oder -(2<sup>53</sup> - 1).

Um Ganzzahlen kleiner als diese zu repräsentieren, sollten Sie {{jsxref("BigInt")}} verwenden.

{{InteractiveExample("JavaScript Demo: Number.MIN_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(x);
// Expected output: -9007199254740992

console.log(x === y);
// Expected output: true
```

## Wert

`-9007199254740991` (-9.007.199.254.740.991, oder ungefähr -9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Doppelgenaue Gleitkommaformat](https://de.wikipedia.org/wiki/Doppelte_Genauigkeit) hat nur 52 Bits, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen. Daher können nur Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 sicher dargestellt werden. Sicher bedeutet in diesem Kontext, dass Ganzzahlen exakt dargestellt und korrekt verglichen werden können. Zum Beispiel wird `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` als true ausgewertet, was mathematisch falsch ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie diese immer als `Number.MIN_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Verwendung von MIN_SAFE_INTEGER

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.MIN_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
