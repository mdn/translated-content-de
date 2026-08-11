---
title: "CSSMathMin: Werte-Eigenschaft"
short-title: values
slug: Web/API/CSSMathMin/values
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`values`**-Eigenschaft der Schnittstelle [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) zurück, das die [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält, die verglichen werden, um das Minimum zu finden.

## Wert

Ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray).

## Beispiele

### Grundlegende Nutzung

Der folgende Code erstellt ein `CSSMathMin`-Objekt und protokolliert seine `values` und Länge.

```js
const min = new CSSMathMin(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(min.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(min.values.length); // 3
```

Wir iterieren dann über die `values` und protokollieren ihren Typ, Wert, ihre Einheit und ihren textlichen String. Jeder dieser Werte entspricht den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekten, die in den Konstruktor übergeben wurden (oder den Operanden der CSS {{cssxref("min", "min()")}}-Funktion, die es darstellt), in der gleichen Reihenfolge.

```js
for (const value of min.values) {
  console.log(
    `${value.constructor.name}: ${value.value} ${value.unit} (${value})`,
  );
}

// CSSUnitValue: 10 px (10px)
// CSSUnitValue: 5 em (5em)
// CSSUnitValue: 50 percent (50%)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
