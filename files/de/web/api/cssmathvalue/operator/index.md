---
title: "CSSMathValue: operator-Eigenschaft"
short-title: operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathValue.operator`** schreibgeschützte Eigenschaft des [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)-Interfaces gibt den Operator an, den der aktuelle Subtyp darstellt. Beispielsweise, wenn der aktuelle `CSSMathValue`-Subtyp `CSSMathSum` ist, gibt diese Eigenschaft den String `"sum"` zurück.

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

### Grundlegende Verwendung

Wir erstellen ein Element mit einer durch eine {{cssxref("calc()")}}-Funktion bestimmten {{cssxref("width")}} und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static) auf den `operator`.

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

{{EmbedLiveSample("Grundlegende Verwendung", 120, 300)}}

Der `CSSMathValue.operator` gibt `sum` für die Gleichung und `negate` für den Operator beim zweiten Wert zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
