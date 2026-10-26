---
title: Math.log10()
short-title: log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.log10()`** gibt den Logarithmus einer Zahl zur Basis 10 zurück. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>das eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;für das gilt:&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log10}(x)}} = \log_{10}(x) = \text{das eindeutige } y \text{ für das gilt: } 10^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.log10()")}}

```js interactive-example
console.log(Math.log10(100000));
// Expected output: 5

console.log(Math.log10(2));
// Expected output: 0.3010299956639812

console.log(Math.log10(1));
// Expected output: 0

console.log(Math.log10(0));
// Expected output: -Infinity
```

## Syntax

```js-nolint
Math.log10(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich 0.

### Rückgabewert

Der Logarithmus von `x` zur Basis 10. Wenn `x < 0` ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `log10()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.log10()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Diese Funktion entspricht `Math.log(x) / Math.log(10)`. Verwenden Sie für `log10(e)` die Konstante {{jsxref("Math.LOG10E")}}, die gleich 1 / {{jsxref("Math.LN10")}} ist.

## Beispiele

### Math.log10() verwenden

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

- [Polyfill für `Math.log10` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.log10` von es-shims](https://www.npmjs.com/package/math.log10)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
