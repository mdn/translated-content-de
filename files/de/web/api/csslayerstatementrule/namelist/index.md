---
title: "CSSLayerStatementRule: Eigenschaft nameList"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
l10n:
  sourceCommit: f78ca75460fbdbc7f17b6e366dad47b9760054b0
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`nameList`**-Eigenschaft der [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)-Schnittstelle gibt die Liste der zugehörigen Cascade-Layer-Namen zurück. Die Namen können nicht verändert werden.

## Wert

Ein {{jsxref("Array")}} von Zeichenfolgen, wobei jede einen Cascade-Layer darstellt, der durch die {{cssxref("@layer")}}-Anweisungsregel repräsentiert wird.

## Beispiele

### HTML

```html
<div></div>
```

### CSS

```css
@layer layerName, layerName2;

@layer layerName3 {
  div {
    font-family: serif;
  }
}
```

### JavaScript

```js
const item = document.getElementsByTagName("div")[0];
const rules = document.getElementById("css-output").sheet.cssRules;

const layerStatementRule = rules[0]; // A CSSLayerStatementRule
const layerBlockRule = rules[1]; // A CSSLayerBlockRule; no nameList property.

item.textContent = `@layer declares the following layers: ${layerStatementRule.nameList.join(
  ", ",
)}.`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSLayerBlockRule.name`](/de/docs/Web/API/CSSLayerBlockRule/name)
- {{CSSXref("@layer")}}
- [Die `@layer` Anweisungsregel für benannte Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
