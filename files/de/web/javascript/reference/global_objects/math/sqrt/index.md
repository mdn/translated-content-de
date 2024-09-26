---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Methode **`Math.sqrt()`** gibt die Quadratwurzel einer Zahl zurück. Das heißt

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚚𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>diese eindeutige&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;, sodass&nbsp;</mtext><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0,\;\mathtt{\operatorname{Math.sqrt}(x)} = \sqrt{x} = \text{diese eindeutige } y \geq 0 \text{ sodass } y^2 = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}

## Syntax

```js-nolint
Math.sqrt(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich 0.

### Rückgabewert

Die Quadratwurzel von `x`, eine nicht negative Zahl. Wenn `x < 0`, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `sqrt()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sqrt()`, und nicht als Methode eines `Math`-Objekts, das Sie erstellt haben (`Math` ist kein Konstruktor).

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