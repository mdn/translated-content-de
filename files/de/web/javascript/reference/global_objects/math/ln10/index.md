---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.LN10`** repräsentiert den natürlichen Logarithmus von 10, ungefähr 2.303.

{{InteractiveExample("JavaScript-Demo: Math.LN10", "shorter")}}

```js interactive-example
function getNatLog10() {
  return Math.LN10;
}

console.log(getNatLog10());
// Expected output: 2.302585092994046
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.303</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN10} = \ln(10) \approx 2.303</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `LN10` eine statische Eigenschaft von `Math` ist, wird sie immer als `Math.LN10` verwendet und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

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
