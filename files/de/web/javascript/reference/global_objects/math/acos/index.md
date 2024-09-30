---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Methode **`Math.acos()`** gibt den Arkuskosinus (in Bogenmaß) einer Zahl zurück. Das bedeutet,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>der eindeutige&nbsp;</mtext><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy="false">]</mo><mtext>&nbsp;so dass&nbsp;</mtext><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1}, 1],\;\mathtt{\operatorname{Math.acos}(x)}} = \arccos(x) = \text{der eindeutige } y \in [0, \pi] \text{ so dass } \cos(y) = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-acos.html")}}

## Syntax

```js-nolint
Math.acos(x)
```

### Parameter

- `x`
  - : Eine Zahl zwischen -1 und 1, einschließlich, die den Kosinuswert des Winkels darstellt.

### Rückgabewert

Der Arkuskosinus (Winkel im Bogenmaß zwischen 0 und π, einschließlich) von `x`. Wenn `x` kleiner als -1 oder größer als 1 ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `acos()` eine statische Methode von `Math` ist, wird sie immer als `Math.acos()` verwendet und nicht als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.acos()

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793 (π)
Math.acos(0); // 1.5707963267948966 (π/2)
Math.acos(0.5); // 1.0471975511965979 (π/3)
Math.acos(1); // 0
Math.acos(2); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
