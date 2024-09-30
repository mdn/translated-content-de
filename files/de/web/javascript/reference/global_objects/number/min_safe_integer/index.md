---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MIN_SAFE_INTEGER`** repräsentiert die kleinste sichere Ganzzahl in JavaScript, oder -(2<sup>53</sup> - 1).

Um Ganzzahlen darzustellen, die kleiner sind, ziehen Sie in Betracht, {{jsxref("BigInt")}} zu verwenden.

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}

## Wert

`-9007199254740991` (-9.007.199.254.740.991 oder etwa -9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Doppelte-Präzision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), daher kann es nur sicher Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 darstellen. Sicher in diesem Kontext bezieht sich auf die Fähigkeit, Ganzzahlen exakt darzustellen und korrekt zu vergleichen. Beispielsweise wird `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` als true ausgewertet, was mathematisch falsch ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MIN_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwertes.

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
