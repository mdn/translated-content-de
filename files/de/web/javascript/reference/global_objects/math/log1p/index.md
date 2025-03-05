---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Math.log1p()`** gibt den natürlichen Logarithmus (zur Basis [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) von `1 + x` zurück, wobei `x` das Argument ist. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1,\;\mathtt{\operatorname{Math.log1p}(x)}} = \ln(1 + x)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.log1p()")}}

```js interactive-example
console.log(Math.log1p(1));
// Expected output: 0.6931471805599453

console.log(Math.log1p(0));
// Expected output: 0

console.log(Math.log1p(-1));
// Expected output: -Infinity

console.log(Math.log1p(-2));
// Expected output: NaN
```

## Syntax

```js-nolint
Math.log1p(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich -1.

### Rückgabewert

Der natürliche Logarithmus (zur Basis [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) von `x + 1`. Wenn `x` -1 ist, wird [`-Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) zurückgegeben. Wenn `x < -1`, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Bei sehr kleinen Werten von _x_ kann das Addieren von 1 die Präzision verringern oder eliminieren. Die in JS verwendeten Doppel-Fließkommazahlen bieten Ihnen etwa 15 Stellen Präzision. 1 + 1e-15 \= 1.000000000000001, aber 1 + 1e-16 = 1.000000000000000 und daher genau 1,0 in dieser Arithmetik, da Stellen über 15 hinaus abgerundet werden.

<!-- prettier-ignore-start -->
Wenn Sie log(1 + _x_) berechnen, wobei _x_ eine kleine positive Zahl ist, sollten Sie eine Antwort sehr nahe bei _x_ erhalten, da: <math><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}}{x} = 1</annotation></semantics></math>. Wenn Sie `Math.log(1 + 1.1111111111e-15)` berechnen, sollten Sie eine Antwort in der Nähe von `1.1111111111e-15` erhalten. Stattdessen berechnen Sie jedoch den Logarithmus von `1.00000000000000111022` (die Rundung ist im Binärsystem, daher sieht es manchmal unschön aus) und erhalten die Antwort 1.11022…e-15, mit nur 3 korrekten Stellen. Wenn Sie stattdessen `Math.log1p(1.1111111111e-15)` berechnen, erhalten Sie eine viel genauere Antwort, `1.1111111110999995e-15`, mit 15 korrekten Dezimalstellen (tatsächlich 16 in diesem Fall).
<!-- prettier-ignore-end -->

Wenn der Wert von `x` kleiner als -1 ist, ist der Rückgabewert immer {{jsxref("NaN")}}.

Da `log1p()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.log1p()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.log1p()

```js
Math.log1p(-2); // NaN
Math.log1p(-1); // -Infinity
Math.log1p(-0); // -0
Math.log1p(0); // 0
Math.log1p(1); // 0.6931471805599453
Math.log1p(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.log1p` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims Polyfill von `Math.log1p`](https://www.npmjs.com/package/math.log1p)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
