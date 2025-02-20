---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.sinh()`** gibt den hyperbolischen Sinus einer Zahl zurück. Das heißt,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh}(x)}} = \sinh(x) = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.sinh()")}}

```js interactive-example
console.log(Math.sinh(0));
// Expected output: 0

console.log(Math.sinh(1));
// Expected output: 1.1752011936438014

console.log(Math.sinh(-1));
// Expected output: -1.1752011936438014

console.log(Math.sinh(2));
// Expected output: 3.626860407847019
```

## Syntax

```js-nolint
Math.sinh(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der hyperbolische Sinus von `x`.

## Beschreibung

Da `sinh()` eine statische Methode von `Math` ist, wird sie immer als `Math.sinh()` verwendet und nicht als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.sinh()

```js
Math.sinh(-Infinity); // -Infinity
Math.sinh(-0); // -0
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
Math.sinh(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.sinh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
