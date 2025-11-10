---
title: Math.E
short-title: E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Math.E`** repräsentiert die Eulersche Zahl, die Basis der natürlichen Logarithmen, e, die ungefähr 2.718 beträgt.

{{InteractiveExample("JavaScript Demo: Math.E")}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// Expected output: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// Expected output: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// Expected output: 105.12710963760242
```

## Wert

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `E` eine statische Eigenschaft von `Math` ist, verwenden Sie sie immer als `Math.E`, anstatt sie als Eigenschaft eines von Ihnen erstellten `Math`-Objekts zu verwenden (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.E

Die folgende Funktion gibt e zurück:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
