---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die **`CSSLayerStatementRule`** stellt eine {{cssxref("@layer")}}-Anweisungsregel dar. Anders als bei [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule) enthält sie keine weiteren Regeln und definiert lediglich eine oder mehrere Ebenen durch Angabe ihrer Namen.

Diese Regel ermöglicht es, eine Ordnungschaftsebene explizit zu deklarieren, die am Anfang einer CSS-Datei in offensichtlicher Weise steht: Die Reihenfolge der Ebenen wird durch das erste Vorkommen jedes Ebenennamens definiert. Ihre Deklaration mit einer Anweisung ermöglicht es dem Leser, die Reihenfolge der Ebenen zu verstehen. Außerdem erlaubt es das Mischen von Inline- und importierten Ebenen, was mit der `CSSLayerBlockRule`-Syntax nicht möglich ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerStatementRule.nameList`](/de/docs/Web/API/CSSLayerStatementRule/nameList) {{ReadOnlyInline}}
  - Ein Array von Zeichenketten, das den Namen jeder Kaskadenschicht durch die Regel darstellt.

## Beispiele

### HTML

```html
<p></p>
```

### CSS

```css
@layer layerName, layerName2;
```

### JavaScript

```js
const item = document.getElementsByTagName("p")[0];
const rules = document.styleSheets[1].cssRules;
// Note that stylesheet #1 is the stylesheet associated with this embedded example,
// while stylesheet #0 is the stylesheet associated with the whole MDN page

const layer = rules[0]; // A CSSLayerStatementRule

item.textContent = `The CSS @layer statement declares the following layers: ${layer.nameList.join(
  ", ",
)}.`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@layer")}}
- [Die `@layer` At-Regel für benannte Ebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
