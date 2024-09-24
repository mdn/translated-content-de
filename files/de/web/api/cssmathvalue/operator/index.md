---
title: "CSSMathValue: Operator-Eigenschaft"
short-title: Operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: dae250f0451c1072def7db7eaa392bfb00598d62
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathValue.operator`** Nur-Lesen-Eigenschaft der {{domxref("CSSMathValue")}} Schnittstelle gibt an, welchen Operator der aktuelle Subtyp darstellt. Beispielsweise, wenn der aktuelle `CSSMathValue` Subtyp `CSSMathSum` ist, wird diese Eigenschaft die Zeichenkette `"sum"` zurückgeben.

## Wert

Ein {{jsxref('String')}}.

| Schnittstelle                | Wert         |
| ---------------------------- | ------------ |
| {{domxref('CSSMathSum')}}    | `"sum"`      |
| {{domxref('CSSMathProduct')}}| `"product"`  |
| {{domxref('CSSMathMin')}}    | `"min"`      |
| {{domxref('CSSMathMax')}}    | `"max"`      |
| {{domxref('CSSMathClamp')}}  | `"clamp"`    |
| {{domxref('CSSMathNegate')}} | `"negate"`   |
| {{domxref('CSSMathInvert')}} | `"invert"`   |

## Beispiele

Wir erstellen ein Element mit einer [`width`](/de/docs/Web/CSS/width), die mit einer [`calc()`](/de/docs/Web/CSS/calc) Funktion festgelegt wird, und nutzen dann {{domxref("console/log_static", "console.log()")}}, um den `operator` auszugeben.

```html
<div>Meine Breite wird durch eine <code>calc()</code> Funktion bestimmt</div>
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

Die `CSSMathValue.operator` gibt `sum` für die Gleichung und `negate` für den Operator beim zweiten Wert zurück.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
