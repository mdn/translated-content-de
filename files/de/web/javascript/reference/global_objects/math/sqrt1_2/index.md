---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Dateneigenschaft **`Math.SQRT1_2`** repräsentiert die Quadratwurzel von 1/2, die ungefähr 0.707 beträgt.

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT1_2} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Math.SQRT1_2` ist eine Konstante und eine leistungsfähigere Entsprechung zu [`Math.sqrt(0.5)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Da `SQRT1_2` eine statische Eigenschaft von `Math` ist, wird sie immer als `Math.SQRT1_2` verwendet und nicht als Eigenschaft eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.SQRT1_2

Die folgende Funktion gibt 1 über der Quadratwurzel von 2 zurück:

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
