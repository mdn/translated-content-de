---
title: "CSSMathValue: operator-Eigenschaft"
short-title: operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSS Typed Object Model API")}}

Die schreibgeschützte **`CSSMathValue.operator`**-Eigenschaft des [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)-Interfaces gibt den Operator an, den der aktuelle Subtyp darstellt. Beispielsweise, wenn der aktuelle `CSSMathValue` Subtyp `CSSMathSum` ist, gibt diese Eigenschaft den String `"sum"` zurück.

## Wert

Ein {{jsxref('String')}}.

| Interface                                           | Wert        |
| --------------------------------------------------- | ----------- |
| [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)         | `"sum"`     |
| [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) | `"product"` |
| [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)         | `"min"`     |
| [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)         | `"max"`     |
| [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)     | `"clamp"`   |
| [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)   | `"negate"`  |
| [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)   | `"invert"`  |

## Beispiele

Wir erstellen ein Element mit einer [`width`](/de/docs/Web/CSS/Reference/Properties/width), die mithilfe einer [`calc()`](/de/docs/Web/CSS/calc)-Funktion bestimmt wird, und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static), um den `operator` auszugeben.

```html
<div>My width has a <code>calc()</code> function</div>
```

Wir weisen eine `width` mit einer Berechnung zu

```css
div {
  width: calc(50% - 0.5vw);
}
```

Wir fügen das JavaScript hinzu

```js
const styleMap = document.querySelector("div").computedStyleMap();

console.log(styleMap.get("width")); // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(styleMap.get("width").values); // CSSNumericArray {0: CSSUnitValue, 1: CSSMathNegate, length: 2}
console.log(styleMap.get("width").operator); // 'sum'
console.log(styleMap.get("width").values[1].operator); // 'negate'
```

{{EmbedLiveSample("Examples", 120, 300)}}

Die `CSSMathValue.operator` gibt `sum` für die Gleichung zurück und `negate` für den Operator des zweiten Wertes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
