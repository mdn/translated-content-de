---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die **`CSSLayerStatementRule`** repräsentiert eine {{cssxref("@layer")}}-Anweisung. Im Gegensatz zu {{domxref("CSSLayerBlockRule")}} enthält sie keine anderen Regeln und definiert lediglich eine oder mehrere Ebenen, indem ihre Namen angegeben werden.

Diese Regel ermöglicht es, die Reihenfolge der Ebenen auf eine klare Weise am Anfang einer CSS-Datei ausdrücklich zu deklarieren: Die Ebenenreihenfolge wird durch die Reihenfolge des ersten Auftretens jedes Ebenennamens definiert. Die Deklaration mit einer Anweisung ermöglicht es dem Leser, die Ebenenreihenfolge zu verstehen. Es erlaubt auch, Inline- und importierte Ebenen zu mischen, was mit der `CSSLayerBlockRule`-Syntax nicht möglich ist.

{{InheritanceDiagram}}

## Instanz Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{DOMxRef("CSSRule")}}._

- {{DOMxRef("CSSLayerStatementRule.nameList")}} {{ReadOnlyInline}}
  - Ein Array von Zeichenketten, das den Namen jeder Kaskadenebene durch die Regel repräsentiert.

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
// Beachten Sie, dass Stylesheet #1 das Stylesheet ist, das mit diesem eingebetteten Beispiel verknüpft ist,
// während Stylesheet #0 das Stylesheet ist, das mit der gesamten MDN-Seite verknüpft ist

const layer = rules[0]; // Eine CSSLayerStatementRule

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
- [Die `@layer`-Anweisung für benannte Ebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- {{DOMxRef("CSSLayerBlockRule")}}
