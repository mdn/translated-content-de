---
title: Math.atan()
short-title: atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Math.atan()`** gibt den Arcustangens (im Bogenmaß) einer Zahl zurück, das heißt

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>das eindeutig&nbsp;</mtext><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mtext>&nbsp;, sodass&nbsp;</mtext><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)}} = \arctan(x) = \text{das eindeutig } y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \text{ , sodass } \tan(y) = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.atan()")}}

```js interactive-example
// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));
// Expected output: 0.6747409422235527

console.log(calcAngle(5, 3));
// Expected output: 1.0303768265243125
```

## Syntax

```js-nolint
Math.atan(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Arcustangens (Winkel im Bogenmaß zwischen <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> und <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>, einschließlich) von `x`. Wenn `x` {{jsxref("Infinity")}} ist, gibt es <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> zurück. Wenn `x` `-Infinity` ist, gibt es <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> zurück.

## Beschreibung

Da `atan()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.atan()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.atan()

```js
Math.atan(-Infinity); // -1.5707963267948966 (-π/2)
Math.atan(-0); // -0
Math.atan(0); // 0
Math.atan(1); // 0.7853981633974483  (π/4)
Math.atan(Infinity); // 1.5707963267948966  (π/2)

// The angle that the line (0,0) -- (x,y) forms with the x-axis in a Cartesian coordinate system
const theta = (x, y) => Math.atan(y / x);
```

Beachten Sie, dass Sie möglicherweise die `theta`-Funktion vermeiden möchten und stattdessen {{jsxref("Math.atan2()")}} verwenden, die einen größeren Bereich hat (zwischen -π und π) und es vermeidet, `NaN` für Fälle wie wenn `x` `0` ist, auszugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
