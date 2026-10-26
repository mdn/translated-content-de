---
title: Math.log2()
short-title: log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.log2()`** gibt den Logarithmus einer Zahl zur Basis 2 zurück. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>das eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;für das gilt:&nbsp;</mtext><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log2}(x)}} = \log_2(x) = \text{das eindeutige } y \text{ für das gilt: } 2^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.log2()")}}

```js interactive-example
console.log(Math.log2(3));
// Expected output: 1.584962500721156

console.log(Math.log2(2));
// Expected output: 1

console.log(Math.log2(1));
// Expected output: 0

console.log(Math.log2(0));
// Expected output: -Infinity
```

## Syntax

```js-nolint
Math.log2(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich 0.

### Rückgabewert

Der Logarithmus von `x` zur Basis 2. Wenn `x < 0` ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `log2()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.log2()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Diese Funktion entspricht `Math.log(x) / Math.log(2)`. Verwenden Sie für `log2(e)` die Konstante {{jsxref("Math.LOG2E")}}, die gleich 1 / {{jsxref("Math.LN2")}} ist.

## Beispiele

### Math.log2() verwenden

```js
Math.log2(-2); // NaN
Math.log2(-0); // -Infinity
Math.log2(0); // -Infinity
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(3); // 1.584962500721156
Math.log2(1024); // 10
Math.log2(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.log2` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
