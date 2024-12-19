---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

Die **`CSSLayerStatementRule`** repräsentiert eine {{cssxref("@layer")}}-Anweisung. Im Gegensatz zur [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule) enthält sie keine anderen Regeln und definiert lediglich einen oder mehrere Ebenen, indem sie deren Namen angibt.

Diese Regel ermöglicht es, die Ordnungsreihenfolge der Ebenen explizit am Anfang einer CSS-Datei zu deklarieren: Die Reihenfolge der Ebenen wird durch das erste Auftreten jedes Ebenennamens definiert. Eine Deklaration mittels einer Anweisung ermöglicht es dem Leser, die Ebenenreihenfolge zu verstehen. Sie erlaubt auch, dass inline- und importierte Ebenen ineinander verschachtelt werden können, was bei Verwendung der `CSSLayerBlockRule`-Syntax nicht möglich ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerStatementRule.nameList`](/de/docs/Web/API/CSSLayerStatementRule/nameList) {{ReadOnlyInline}}
  - Ein Array von Strings, das die Namen jeder Kaskadenschicht der Regel darstellt

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
- [Die `@layer`-Anweisung für benannte Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
