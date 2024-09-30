---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`Math.sqrt()`** statische Methode gibt die Quadratwurzel einer Zahl zurück. Das bedeutet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚚𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>die eindeutige&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;so dass&nbsp;</mtext><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0,\;\mathtt{\operatorname{Math.sqrt}(x)}} = \sqrt{x} = \text{die eindeutige } y \geq 0 \text{ so dass } y^2 = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}

## Syntax

```js-nolint
Math.sqrt(x)
```

### Parameter

- `x`
  - : Eine Zahl, die größer oder gleich 0 ist.

### Rückgabewert

Die Quadratwurzel von `x`, eine nichtnegative Zahl. Wenn `x < 0`, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Weil `sqrt()` eine statische Methode von `Math` ist, wird sie immer über `Math.sqrt()` verwendet und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.sqrt()

```js
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
Math.sqrt(0); // 0
Math.sqrt(1); // 1
Math.sqrt(2); // 1.414213562373095
Math.sqrt(9); // 3
Math.sqrt(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
