---
title: "CSSMathSum: Werte-Eigenschaft"
short-title: values
slug: Web/API/CSSMathSum/values
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`values`** der Schnittstelle [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) zurück, das die [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält, die zusammen addiert werden.

## Wert

Ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray).

## Beispiele

### Grundlegende Nutzung

Der folgende Code erstellt ein `CSSMathSum`-Objekt und protokolliert dessen `values` und Länge.

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(sum.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(sum.values.length); // 3
```

Wir iterieren dann über die `values` und protokollieren deren Typ, Wert, Einheit und in Text konvertierte Form. Jeder dieser Werte entspricht den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekten, die dem Konstruktor übergeben wurden (oder die Terme der Addition/Subtraktion, die sie darstellen), in der gleichen Reihenfolge.

```js
for (const value of sum.values) {
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
