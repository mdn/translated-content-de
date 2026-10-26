---
title: Math.log1p()
short-title: log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

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

Der natürliche Logarithmus (zur Basis [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) von `x + 1`. Wenn `x` gleich -1 ist, wird [`-Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) zurückgegeben. Wenn `x < -1` ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Bei sehr kleinen Werten von _x_ kann die Addition von 1 die Genauigkeit verringern oder ganz aufheben. Die in JS verwendeten Gleitkommazahlen mit doppelter Genauigkeit bieten etwa 15 Stellen Genauigkeit. 1 + 1e-15 \= 1.000000000000001, aber 1 + 1e-16 = 1.000000000000000 und ist damit in dieser Arithmetik exakt 1.0, weil Stellen nach der 15. Stelle weggerundet werden.

<!-- prettier-ignore-start -->
Wenn Sie log(1 + _x_) berechnen, wobei _x_ eine kleine positive Zahl ist, sollte das Ergebnis sehr nahe bei _x_ liegen, denn: <math><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}}{x} = 1</annotation></semantics></math>. Wenn Sie `Math.log(1 + 1.1111111111e-15)` berechnen, sollte das Ergebnis nahe bei `1.1111111111e-15` liegen. Stattdessen berechnen Sie den Logarithmus von `1.00000000000000111022` (die Rundung erfolgt im Binärsystem, weshalb das Ergebnis mitunter unschön aussieht) und erhalten 1.11022…e-15 – mit nur 3 korrekten Stellen. Wenn Sie stattdessen `Math.log1p(1.1111111111e-15)` berechnen, erhalten Sie das wesentlich genauere Ergebnis `1.1111111110999995e-15` mit 15 korrekten Stellen (in diesem Fall sogar 16).
<!-- prettier-ignore-end -->

Wenn der Wert von `x` kleiner als -1 ist, ist der Rückgabewert immer {{jsxref("NaN")}}.

Da `log1p()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.log1p()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.log1p() verwenden

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

- [Polyfill für `Math.log1p` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.log1p` von es-shims](https://www.npmjs.com/package/math.log1p)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
