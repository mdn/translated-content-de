---
title: "CSSMathValue: operator-Eigenschaft"
short-title: operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathValue.operator`** schreibgeschützte Eigenschaft des [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)-Interfaces gibt den Operator an, den der aktuelle Subtyp darstellt. Zum Beispiel, wenn der aktuelle `CSSMathValue` Subtyp `CSSMathSum` ist, gibt diese Eigenschaft den String `"sum"` zurück.

## Wert

Ein {{jsxref('String')}}.

| Schnittstelle                                       | Wert        |
| --------------------------------------------------- | ----------- |
| [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)         | `"sum"`     |
| [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) | `"product"` |
| [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)         | `"min"`     |
| [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)         | `"max"`     |
| [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)     | `"clamp"`   |
| [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)   | `"negate"`  |
| [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)   | `"invert"`  |

## Beispiele

Wir erstellen ein Element mit einer {{cssxref("width")}}, die über eine {{cssxref("calc()")}}-Funktion bestimmt wird, und benutzen dann [`console.log()`](/de/docs/Web/API/console/log_static), um den `operator` auszugeben.

```html
<div>My width has a <code>calc()</code> function</div>
```

Wir vergeben eine `width` mit einer Berechnung

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

Das `CSSMathValue.operator` gibt `sum` für die Gleichung und `negate` für den Operator auf dem zweiten Wert zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
