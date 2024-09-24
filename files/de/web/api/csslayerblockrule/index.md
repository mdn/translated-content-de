---
title: CSSLayerBlockRule
slug: Web/API/CSSLayerBlockRule
l10n:
  sourceCommit: aa1c6876fb3cea003dda92f02c9bac93fd3370b2
---

{{APIRef("CSSOM")}}

Die **`CSSLayerBlockRule`** stellt eine {{cssxref("@layer")}} Blockregel dar.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

- {{DOMxRef("CSSLayerBlockRule.name")}} {{ReadOnlyInline}}
  - Ein String, der den Namen der zugehörigen Kaskadenschicht enthält.

## Instanzmethoden

_Erbt Methoden von seinen Vorfahren {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

## Beispiele

### HTML

```html
<p>Ich werde in <code>color: rebeccapurple</code> angezeigt.</p>
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
// Beachten Sie, dass Stylesheet #1 das mit diesem eingebetteten Beispiel verbundene Stylesheet ist,
// während Stylesheet #0 das mit der gesamten MDN-Seite verbundene Stylesheet ist

const layer = rules[0]; // Eine CSSLayerBlockRule

item.textContent = `The CSSLayerBlockRule is for the "${layer.name}" layer`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@layer")}}
- {{DOMxRef("CSSLayerStatementRule")}}
- [Lernen Sie CSS-Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
