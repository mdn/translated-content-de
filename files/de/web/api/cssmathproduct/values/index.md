---
title: "CSSMathProduct: values-Eigenschaft"
short-title: values
slug: Web/API/CSSMathProduct/values
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`values`**-Eigenschaft der [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)-Schnittstelle gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) zurück, das die [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält, die miteinander multipliziert werden.

## Wert

Ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathProduct`-Objekt und protokolliert dessen `values` und Länge.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values.length); // 2
```

Wir iterieren dann über die `values` und protokollieren deren Typ, Wert, Einheit und in Text konvertierte Form. Jeder dieser Werte entspricht den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekten, die in den Konstruktor übergeben wurden (oder den Begriffen der Multiplikation/Division, die er darstellt), in derselben Reihenfolge.

```js
for (const value of product.values) {
  console.log(
    `${value.constructor.name}: ${value.value} ${value.unit} (${value})`,
  );
}

// CSSUnitValue: 10 px (10px)
// CSSUnitValue: 50 percent (50%)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
