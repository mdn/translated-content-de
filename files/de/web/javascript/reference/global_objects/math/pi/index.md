---
title: Math.PI
short-title: PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Math.PI`** repräsentiert das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr 3,14159.

{{InteractiveExample("JavaScript Demo: Math.PI")}}

```js interactive-example
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// Expected output: 3.141592653589793

console.log(calculateCircumference(10));
// Expected output: 62.83185307179586
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{Math.PI} = \pi \approx 3.14159</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `PI` eine statische Eigenschaft von `Math` ist, verwenden Sie es immer als `Math.PI` und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.PI

Die folgende Funktion verwendet `Math.PI`, um den Umfang eines Kreises mit einem übergebenen Radius zu berechnen.

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1); // 6.283185307179586
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math")}}
