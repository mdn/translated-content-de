---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.LOG10E`** repräsentiert den dekadischen Logarithmus von [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E), ungefähr 0,434.

{{InteractiveExample("JavaScript Demo: Math.log10e()", "shorter")}}

```js interactive-example
function getLog10e() {
  return Math.LOG10E;
}

console.log(getLog10e());
// Expected output: 0.4342944819032518
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟷𝟶𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{Math.LOG10E} = \log_{10}(\mathrm{e}) \approx 0.434</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `LOG10E` eine statische Eigenschaft von `Math` ist, wird sie immer als `Math.LOG10E` verwendet und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.LOG10E

Die folgende Funktion gibt den dekadischen Logarithmus von e zurück:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
