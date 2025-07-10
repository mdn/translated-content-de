---
title: Math.SQRT2
short-title: SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Math.SQRT2`** repräsentiert die Quadratwurzel von 2, ungefähr 1,414.

{{InteractiveExample("JavaScript Demo: Math.SQRT2", "shorter")}}

```js interactive-example
function getRoot2() {
  return Math.SQRT2;
}

console.log(getRoot2());
// Expected output: 1.4142135623730951
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟸</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT2} = \sqrt{2} \approx 1.414</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Math.SQRT2` ist eine Konstante und ein leistungsfähigeres Äquivalent zu [`Math.sqrt(2)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Da `SQRT2` eine statische Eigenschaft von `Math` ist, wird sie stets als `Math.SQRT2` verwendet und nicht als Eigenschaft eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.SQRT2

Die folgende Funktion gibt die Quadratwurzel von 2 zurück:

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
