---
title: "CSSMathValue: operator Eigenschaft"
short-title: operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`operator`**-Eigenschaft der [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)-Schnittstelle gibt den Operator an, den der aktuelle Subtyp repräsentiert. Wenn zum Beispiel der aktuelle `CSSMathValue`-Subtyp `CSSMathSum` ist, wird diese Eigenschaft den String `"sum"` zurückgeben.

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

### Grundlegende Verwendung

Wir erstellen ein Element mit einer {{cssxref("width")}}, die mithilfe einer {{cssxref("calc()")}}-Funktion bestimmt wird, und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static), um den `operator` auszugeben.

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

{{EmbedLiveSample("Basic usage", 120, 300)}}

`CSSMathValue.operator` gibt `sum` für die Gleichung und `negate` für den Operator des zweiten Werts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
