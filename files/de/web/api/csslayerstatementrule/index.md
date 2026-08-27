---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("CSSOM")}}

Das **`CSSLayerStatementRule`** repräsentiert eine {{cssxref("@layer")}}-Anweisung. Im Gegensatz zur [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule) enthält es keine anderen Regeln und definiert lediglich einen oder mehrere Schichten durch Angabe ihrer Namen.

Diese Regel ermöglicht es Ihnen, die Reihenfolge der Schichten explizit zu deklarieren, was auf anschauliche Weise am Anfang einer CSS-Datei erfolgt: Die Reihenfolge der Schichten wird durch das erste Vorkommen jedes Schichtennamens definiert. Die Deklaration mit einer Anweisung ermöglicht es dem Leser, die Reihenfolge der Schichten zu verstehen. Es erlaubt auch, dass Inline- und importierte Schichten miteinander verschachtelt werden, was bei Verwendung der `CSSLayerBlockRule`-Syntax nicht möglich ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerStatementRule.nameList`](/de/docs/Web/API/CSSLayerStatementRule/nameList) {{ReadOnlyInline}}
  - Ein Array von Zeichenfolgen, das den Namen jeder Kaskadenschicht durch die Regel darstellt

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
const rules = document.getElementById("css-output").sheet.cssRules;

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
- [Die `@layer`-Anweisung für benannte Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
