---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`Infinity`** globale Eigenschaft ist ein numerischer Wert, der die Unendlichkeit darstellt.

{{InteractiveExample("JavaScript Demo: Infinity")}}

```js interactive-example
const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // Expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// Expected output: 0
```

## Wert

Der gleiche Zahlenwert wie {{jsxref("Number.POSITIVE_INFINITY")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Infinity` ist eine Eigenschaft des _globalen Objekts_. Mit anderen Worten, es ist eine Variable im globalen Rahmen.

Der Wert `Infinity` (positive Unendlichkeit) ist größer als jede andere Zahl.

Dieser Wert verhält sich leicht anders als die mathematische Unendlichkeit; siehe {{jsxref("Number.POSITIVE_INFINITY")}} für Details.

## Beispiele

### Verwendung von Infinity

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
