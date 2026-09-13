---
title: "CSSMathMax: values-Eigenschaft"
short-title: values
slug: Web/API/CSSMathMax/values
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`values`** schreibgeschützte Eigenschaft der [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)-Schnittstelle gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) zurück, das die [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält, die zum Finden des Maximums verglichen werden.

## Wert

Ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray).

## Beispiele

### Grundlegende Nutzung

Der folgende Code erstellt ein `CSSMathMax`-Objekt und protokolliert dessen `values` und Länge.

```js
const max = new CSSMathMax(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(max.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(max.values.length); // 3
```

Wir iterieren dann über die `values`, protokollieren ihren Typ, Wert, Einheit und den als Zeichenfolge dargestellten Text.
Jedes davon entspricht den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekten, die in den Konstruktor übergeben wurden (oder den Operanden der CSS {{cssxref("max", "max()")}}-Funktion, die es darstellt), in der gleichen Reihenfolge.

```js
for (const value of max.values) {
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
