---
title: "CSSLayerStatementRule: nameList-Eigenschaft"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`nameList`**-Eigenschaft der {{DOMxRef("CSSLayerStatementRule")}}-Schnittstelle gibt die Liste der zugehörigen Kaskadenschichtnamen zurück. Die Namen können nicht geändert werden.

## Wert

Ein {{jsxref("Array")}} aus Zeichenketten, von denen jede eine Kaskadenschicht repräsentiert, die durch die {{cssxref("@layer")}}-Anweisung repräsentiert wird.

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

- {{DOMXRef("CSSLayerBlockRule.name")}}
- {{CSSXref("@layer")}}
- [Die `@layer` Anweisung für benannte Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
