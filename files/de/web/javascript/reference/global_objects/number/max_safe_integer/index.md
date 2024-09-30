---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MAX_SAFE_INTEGER`** repräsentiert den maximal sicheren Integer in JavaScript (2<sup>53</sup> – 1).

Für größere Integer sollten Sie {{jsxref("BigInt")}} verwenden.

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}

## Wert

`9007199254740991` (9.007.199.254.740.991 oder \~9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Doppelpunktgenaue Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), sodass es nur Integer zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 sicher darstellen kann. "Sicher" bedeutet in diesem Kontext, dass Integer exakt dargestellt und korrekt verglichen werden können. Zum Beispiel wird `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` als wahr ausgewertet, was mathematisch inkorrekt ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MAX_SAFE_INTEGER` und nicht als eine Eigenschaft eines Zahlenwerts.

## Beispiele

### Rückgabewert von MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Beziehung zwischen MAX_SAFE_INTEGER und EPSILON

{{jsxref("Number.EPSILON")}} ist 2<sup>-52</sup>, während `MAX_SAFE_INTEGER` 2<sup>53</sup> – 1 ist — beide stammen von der Breite der Mantisse ab, die 53 Bits beträgt (wobei das höchste Bit immer 1 ist). Die Multiplikation dieser beiden Werte ergibt einen Wert, der sehr nahe, aber nicht gleich 2 ist.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.MAX_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
