---
title: Math.hypot()
short-title: hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.hypot()`** gibt die Quadratwurzel aus der Summe der Quadrate ihrer Argumente zurück. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)}} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.hypot()")}}

```js interactive-example
console.log(Math.hypot(3, 4));
// Expected output: 5

console.log(Math.hypot(5, 12));
// Expected output: 13

console.log(Math.hypot(3, 4, 5));
// Expected output: 7.0710678118654755

console.log(Math.hypot(-5));
// Expected output: 5
```

## Syntax

```js-nolint
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
```

### Parameter

- `value1`, …, `valueN`
  - : Zahlen.

### Rückgabewert

Die Quadratwurzel aus der Summe der Quadrate der übergebenen Argumente. Die Methode gibt {{jsxref("Infinity")}} zurück, wenn eines der Argumente ±Infinity ist. Andernfalls gibt sie {{jsxref("NaN")}} zurück, wenn mindestens eines der Argumente {{jsxref("NaN")}} ist oder in {{jsxref("NaN")}} umgewandelt wird. Sie gibt `0` zurück, wenn keine Argumente übergeben werden oder alle Argumente ±0 sind.

## Beschreibung

Zur Berechnung der Hypotenuse eines rechtwinkligen Dreiecks oder des Betrags einer komplexen Zahl wird die Formel `Math.sqrt(v1*v1 + v2*v2)` verwendet. Dabei sind v1 und v2 die Längen der beiden Katheten beziehungsweise die Real- und Imaginärkomponente der komplexen Zahl. Der entsprechende Abstand in zwei oder mehr Dimensionen lässt sich berechnen, indem weitere Quadrate unter der Quadratwurzel addiert werden: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

Diese Funktion macht die Berechnung einfacher und schneller: Sie rufen `Math.hypot(v1, v2)` oder `Math.hypot(v1, /* …, */, vN)` auf.

`Math.hypot` vermeidet außerdem Überlauf- und Unterlaufprobleme bei sehr großen oder sehr kleinen Zahlen. Die größte in JS darstellbare Zahl ist [`Number.MAX_VALUE`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE), die ungefähr 10<sup>308</sup> beträgt. Sind Ihre Zahlen größer als etwa 10<sup>154</sup>, ergibt ihr Quadrat Infinity. Beispielsweise gilt `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Wenn Sie stattdessen `hypot()` verwenden, erhalten Sie ein genaueres Ergebnis: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Dasselbe gilt für sehr kleine Zahlen: `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, aber `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Mit einem Argument entspricht `Math.hypot()` der Methode [`Math.abs()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/abs). [`Math.hypot.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) hat den Wert 2. Dies deutet darauf hin, dass die Methode für mindestens zwei Parameter ausgelegt ist.

Da `hypot()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.hypot()` und nicht als Methode eines selbst erzeugten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.hypot() verwenden

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, since +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.hypot` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
