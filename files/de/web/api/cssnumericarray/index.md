---
title: CSSNumericArray
slug: Web/API/CSSNumericArray
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSNumericArray`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert ein iterierbares Objekt, das auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-basierten Objekten basiert.

Ein Objekt dieses Typs wird verwendet, um die Operanden einer mathematischen Operation in der `values`-Eigenschaft von [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct), [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) und [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) darzustellen.

Die Elemente können über einen Index (`array[0]`) zugegriffen werden, und als iterierbares Objekt kann es mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife oder mit Spread-Syntax verwendet werden.

## Instanzen-Eigenschaften

- [`CSSNumericArray.length`](/de/docs/Web/API/CSSNumericArray/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente im Objekt zurück.

## Instanz-Methoden

- [`CSSNumericArray.entries()`](/de/docs/Web/API/CSSNumericArray/entries)
  - : Gibt einen neuen _Array-Iterator_ zurück, der `[index, value]`-Paare für jedes Element im Objekt liefert.
- [`CSSNumericArray.forEach()`](/de/docs/Web/API/CSSNumericArray/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element im Objekt aus.
- [`CSSNumericArray.keys()`](/de/docs/Web/API/CSSNumericArray/keys)
  - : Gibt einen neuen _Array-Iterator_ zurück, der die Indizes jedes Elements im Objekt liefert.
- [`CSSNumericArray.values()`](/de/docs/Web/API/CSSNumericArray/values)
  - : Gibt einen neuen _Array-Iterator_ zurück, der jedes Element im Objekt liefert.

## Beispiele

### Lesen der Terme eines `CSSMathSum`

Die `values`-Eigenschaft eines [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) ist ein `CSSNumericArray`, das die Terme der Summe enthält.
Dieses Beispiel erstellt einen `CSSMathSum` und liest dann seine `values` über `length`, indizierten Zugriff und Iteration.

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));
const values = sum.values;

console.log(values.length); // 3
console.log(values[0]); // CSSUnitValue {value: 10, unit: "px"}

for (const value of values) {
  console.log(value.toString());
}
// "10px"
// "5em"
// "50%"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
