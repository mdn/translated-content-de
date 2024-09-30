---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die **`CSSLayerStatementRule`** repräsentiert eine {{cssxref("@layer")}}-Anweisungsregel. Im Gegensatz zur [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule) enthält sie keine anderen Regeln und definiert lediglich eine oder mehrere Ebenen, indem sie deren Namen angibt.

Diese Regel ermöglicht es, die Ordnung der Ebenen auf eine offensichtliche Weise am Anfang einer CSS-Datei explizit festzulegen: Die Schichtreihenfolge wird durch das Auftreten der Schichtnamen bestimmt. Das Deklarieren mit einer Anweisung ermöglicht es dem Leser, die Reihenfolge der Schichten zu verstehen. Es erlaubt auch, Inline- und importierte Schichten zu überlagern, was bei der Verwendung der `CSSLayerBlockRule`-Syntax nicht möglich ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerStatementRule.nameList`](/de/docs/Web/API/CSSLayerStatementRule/nameList) {{ReadOnlyInline}}
  - Ein Array von Zeichenfolgen, das den Namen jeder Kaskadenschicht gemäß der Regel darstellt

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
- [Die `@layer`-Anweisungsregel für benannte Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
