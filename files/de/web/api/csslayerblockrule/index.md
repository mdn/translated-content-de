---
title: CSSLayerBlockRule
slug: Web/API/CSSLayerBlockRule
l10n:
  sourceCommit: d7e665f6202179fcccbe753a1bfd358c224c3928
---

{{APIRef("CSSOM")}}

Die **`CSSLayerBlockRule`** repräsentiert eine {{cssxref("@layer")}} Blockregel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerBlockRule.name`](/de/docs/Web/API/CSSLayerBlockRule/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen der zugehörigen Kaskadenschicht enthält.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### HTML

```html
<p>I am displayed in <code>color: rebeccapurple</code>.</p>
```

### CSS

```css
@layer special {
  p {
    color: rebeccapurple;
  }
}
```

### JavaScript

```js
const item = document.getElementsByTagName("p")[0];
const rules = document.getElementById("css-output").sheet.cssRules;

const layer = rules[0]; // A CSSLayerBlockRule

item.textContent = `The CSSLayerBlockRule is for the "${layer.name}" layer`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@layer")}}
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [CSS-Kaskadenebenen kennenlernen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
