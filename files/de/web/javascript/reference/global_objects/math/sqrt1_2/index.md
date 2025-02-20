---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.SQRT1_2`** repräsentiert die Quadratwurzel von 1/2, was ungefähr 0,707 entspricht.

{{InteractiveExample("JavaScript Demo: Math.SQRT1_2", "shorter")}}

```js interactive-example
function getRoot1Over2() {
  return Math.SQRT1_2;
}

console.log(getRoot1Over2());
// Expected output: 0.7071067811865476
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT1_2} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Math.SQRT1_2` ist eine Konstante und eine leistungsfähigere Alternative zu [`Math.sqrt(0.5)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Da `SQRT1_2` eine statische Eigenschaft von `Math` ist, wird sie immer als `Math.SQRT1_2` verwendet, anstatt als Eigenschaft eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.SQRT1_2

Die folgende Funktion gibt 1 über die Quadratwurzel von 2 zurück:

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
