---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.LOG2E`** repräsentiert den Logarithmus von [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E) zur Basis 2, ungefähr 1,443.

{{InteractiveExample("JavaScript Demo: Math.log2e()", "shorter")}}

```js interactive-example
function getLog2e() {
  return Math.LOG2E;
}

console.log(getLog2e());
// Expected output: 1.4426950408889634
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟸𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.443</mn></mrow><annotation encoding="TeX">\mathtt{Math.LOG2E} = \log_2(\mathrm{e}) \approx 1.443</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `LOG2E` eine statische Eigenschaft von `Math` ist, verwenden Sie es immer als `Math.LOG2E` und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.LOG2E

Die folgende Funktion gibt den Logarithmus von e zur Basis 2 zurück:

```js
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
