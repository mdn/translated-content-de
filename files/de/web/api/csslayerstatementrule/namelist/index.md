---
title: "CSSLayerStatementRule: nameList-Eigenschaft"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`nameList`**-Eigenschaft der [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)-Schnittstelle gibt die Liste der zugehörigen Kaskadierschichtnamen zurück. Die Namen können nicht geändert werden.

## Wert

Ein {{jsxref("Array")}} von Zeichenfolgen, wobei jede eine Kaskadierschicht darstellt, die durch die {{cssxref("@layer")}}-Anweisungsregel repräsentiert wird.

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
const rules = document.styleSheets[1].cssRules;
// Note that stylesheet #1 is the stylesheet associated with this embedded example,
// while stylesheet #0 is the stylesheet associated with the whole MDN page

const layerStatementRule = rules[0]; // A CSSLayerStatementRule
const layerBlockRule = rules[1]; // A CSSLayerBlockRule; no nameList property.

item.textContent = `@layer declares the following layers: ${layer.nameList.join(
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
- [Die `@layer` At-Regel für benannte Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
