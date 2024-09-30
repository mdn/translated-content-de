---
title: CSSLayerBlockRule
slug: Web/API/CSSLayerBlockRule
l10n:
  sourceCommit: aa1c6876fb3cea003dda92f02c9bac93fd3370b2
---

{{APIRef("CSSOM")}}

Der **`CSSLayerBlockRule`** repräsentiert eine {{cssxref("@layer")}}-Blockregel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerBlockRule.name`](/de/docs/Web/API/CSSLayerBlockRule/name) {{ReadOnlyInline}}
  - Ein String, der den Namen der zugehörigen Kaskadenschicht enthält.

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
const rules = document.styleSheets[1].cssRules;
// Note that stylesheet #1 is the stylesheet associated with this embedded example,
// while stylesheet #0 is the stylesheet associated with the whole MDN page

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
- [Leitfaden zu CSS-Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
