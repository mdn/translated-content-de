---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Eigenschaft **`Math.LOG10E`** repräsentiert den Logarithmus von [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E) zur Basis 10, ungefähr 0,434.

{{EmbedInteractiveExample("pages/js/math-log10e.html", "shorter")}}

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟷𝟶𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{Math.LOG10E} = \log_{10}(\mathrm{e}) \approx 0.434</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `LOG10E` eine statische Eigenschaft von `Math` ist, verwenden Sie sie immer als `Math.LOG10E` und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.LOG10E

Die folgende Funktion gibt den Logarithmus von e zur Basis 10 zurück:

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
