---
title: "CSSMathValue: operator-Eigenschaft"
short-title: operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("CSS Typed Object Model API")}}

Die eigenschaft **`CSSMathValue.operator`** des Interfaces [`CSSMathValue`](/de/docs/Web/API/CSSMathValue) ist schreibgeschützt und zeigt den Operator an, den der aktuelle Subtyp darstellt. Zum Beispiel, wenn der aktuelle `CSSMathValue` Subtyp `CSSMathSum` ist, wird diese Eigenschaft den String `"sum"` zurückgeben.

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

Wir erstellen ein Element mit einer [`width`](/de/docs/Web/CSS/width), die mit einer [`calc()`](/de/docs/Web/CSS/calc) Funktion bestimmt wird, und nutzen dann [`console.log()`](/de/docs/Web/API/Console/log_static), um den `operator` auszugeben.

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

Die `CSSMathValue.operator` gibt `sum` für die Gleichung und `negate` für den Operator auf dem zweiten Wert zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
