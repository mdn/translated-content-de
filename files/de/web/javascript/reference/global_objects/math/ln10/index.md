---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.LN10`** repräsentiert den natürlichen Logarithmus von 10, ungefähr 2,302.

{{EmbedInteractiveExample("pages/js/math-ln10.html", "shorter")}}

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN10} = \ln(10) \approx 2.302</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `LN10` eine statische Eigenschaft von `Math` ist, verwenden Sie sie immer als `Math.LN10` und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.LN10

Die folgende Funktion gibt den natürlichen Logarithmus von 10 zurück:

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
