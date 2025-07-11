---
title: Math.exp()
short-title: exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Math.exp()`** gibt [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E) potenziert mit einer Zahl zurück. Das bedeutet

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.exp}(x)}} = \mathrm{e}^x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.exp()")}}

```js interactive-example
console.log(Math.exp(0));
// Expected output: 1

console.log(Math.exp(1));
// Expected output: 2.718281828459 (approximately)

console.log(Math.exp(-1));
// Expected output: 0.36787944117144233

console.log(Math.exp(2));
// Expected output: 7.38905609893065
```

## Syntax

```js-nolint
Math.exp(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Eine nicht-negative Zahl, die e<sup>x</sup> darstellt, wobei e [die Basis des natürlichen Logarithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E) ist.

## Beschreibung

Da `exp()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.exp()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Beachten Sie, dass `e` potenziert mit einer Zahl, die sehr nah bei 0 liegt, sehr nah bei 1 liegt und an Genauigkeit verliert. In diesem Fall sollten Sie möglicherweise {{jsxref("Math.expm1")}} verwenden, um eine viel genauere Bruchteilsantwort zu erhalten.

## Beispiele

### Verwendung von Math.exp()

```js
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
