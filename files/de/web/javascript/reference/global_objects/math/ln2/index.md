---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.LN2`** stellt den natürlichen Logarithmus von 2 dar, ungefähr 0.693:

{{EmbedInteractiveExample("pages/js/math-ln2.html", "shorter")}}

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟸</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN2} = \ln(2) \approx 0.693</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `LN2` eine statische Eigenschaft von `Math` ist, verwenden Sie es immer als `Math.LN2` und nicht als Eigenschaft eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.LN2

Die folgende Funktion gibt den natürlichen Logarithmus von 2 zurück:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
