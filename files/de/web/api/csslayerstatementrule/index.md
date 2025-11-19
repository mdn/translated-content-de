---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: d7e665f6202179fcccbe753a1bfd358c224c3928
---

{{APIRef("CSSOM")}}

Die **`CSSLayerStatementRule`** repräsentiert eine {{cssxref("@layer")}} Anweisungsregel. Im Gegensatz zu [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule) enthält sie keine weiteren Regeln und definiert lediglich eine oder mehrere Ebenen, indem deren Namen angegeben werden.

Diese Regel ermöglicht es, die Reihenfolge der Ebenen explizit zu deklarieren, die zu Beginn einer CSS-Datei offensichtlich ist: Die Reihenfolge der Ebenen wird durch das erste Auftreten jedes Ebenennamens bestimmt. Durch das Deklarieren mit einer Anweisung kann der Leser die Ebenenreihenfolge verstehen. Es ermöglicht auch das Ineinanderfügen von inline und importierten Ebenen, was bei Verwendung der `CSSLayerBlockRule`-Syntax nicht möglich ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSLayerStatementRule.nameList`](/de/docs/Web/API/CSSLayerStatementRule/nameList) {{ReadOnlyInline}}
  - Ein Array von String-Elementen, das den Namen jeder Kaskadenschicht durch die Regel darstellt.

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
- [Die `@layer` Anweisungsregel für benannte Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
