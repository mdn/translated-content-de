---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Methode **`Math.cbrt()`** gibt die Kubikwurzel einer Zahl zurück. Das bedeutet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚋𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>einzigartige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;so dass&nbsp;</mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cbrt}(x)}} = \sqrt[3]{x} = \text{die einzigartige } y \text{ so dass } y^3 = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}

## Syntax

```js-nolint
Math.cbrt(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die Kubikwurzel von `x`.

## Beschreibung

Da `cbrt()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.cbrt()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.cbrt()

```js
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.cbrt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
