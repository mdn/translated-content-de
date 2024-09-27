---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Methode **`Math.log10()`** gibt den Logarithmus zur Basis 10 einer Zahl zurück. Das bedeutet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>das eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;so dass&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log_{10}(x) = \text{the unique } y \text{ such that } 10^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## Syntax

```js-nolint
Math.log10(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich 0.

### Rückgabewert

Der logarithmus zur Basis 10 von `x`. Wenn `x < 0`, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `log10()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.log10()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Diese Funktion ist das Äquivalent von `Math.log(x) / Math.log(10)`. Für `log10(e)` verwenden Sie die Konstante {{jsxref("Math.LOG10E")}}, die 1 / {{jsxref("Math.LN10")}} ist.

## Beispiele

### Verwendung von Math.log10()

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.log10` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
