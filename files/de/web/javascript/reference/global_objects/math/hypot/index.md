---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{JSRef}}

Die statische Methode **`Math.hypot()`** gibt die Quadratwurzel der Summe der Quadrate ihrer Argumente zurück. Das bedeutet,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)}} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

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

Die Quadratwurzel der Summe der Quadrate der gegebenen Argumente. Gibt {{jsxref("Infinity")}} zurück, wenn eines der Argumente ±Infinity ist. Andernfalls, wenn mindestens eines der Argumente ist oder zu {{jsxref("NaN")}} konvertiert wird, gibt es {{jsxref("NaN")}} zurück. Gibt `0` zurück, wenn keine Argumente vorhanden sind oder alle Argumente ±0 sind.

## Beschreibung

Die Berechnung der Hypotenuse eines rechtwinkligen Dreiecks oder der Betrag einer komplexen Zahl verwendet die Formel `Math.sqrt(v1*v1 + v2*v2)`, wobei v1 und v2 die Längen der Schenkel des Dreiecks oder die realen und komplexen Komponenten der Zahl sind. Der entsprechende Abstand in zwei oder mehr Dimensionen kann durch Hinzufügen weiterer Quadrate unter der Quadratwurzel berechnet werden: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

Diese Funktion macht diese Berechnung einfacher und schneller; Sie rufen `Math.hypot(v1, v2)` oder `Math.hypot(v1, /* …, */, vN)` auf.

`Math.hypot` vermeidet auch Überlauf/Unterlauf-Probleme, wenn die Größenordnung Ihrer Zahlen sehr groß ist. Die größte Zahl, die Sie in JS darstellen können, ist [`Number.MAX_VALUE`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE), die etwa 10<sup>308</sup> beträgt. Wenn Ihre Zahlen größer als etwa 10<sup>154</sup> sind, führt das Quadrieren zur Infinity. Zum Beispiel, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Wenn Sie stattdessen `hypot()` verwenden, erhalten Sie eine bessere Antwort: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Das gilt auch für sehr kleine Zahlen. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, aber `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Mit einem Argument entspricht `Math.hypot()` [`Math.abs()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/abs). [`Math.hypot.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach darauf hinweist, dass es dafür konzipiert ist, mindestens zwei Parameter zu verarbeiten.

Da `hypot()` eine statische Methode von `Math` ist, verwenden Sie es immer als `Math.hypot()` und nicht als Methode eines von Ihnen erzeugten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.hypot()

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

- [Polyfill von `Math.hypot` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
