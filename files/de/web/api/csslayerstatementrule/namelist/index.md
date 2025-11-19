---
title: "CSSLayerStatementRule: nameList-Eigenschaft"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
l10n:
  sourceCommit: d7e665f6202179fcccbe753a1bfd358c224c3928
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`nameList`**-Eigenschaft der [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)-Schnittstelle gibt die Liste der zugehörigen Kaskaden-Ebenennamen zurück. Diese Namen können nicht geändert werden.

## Wert

Ein {{jsxref("Array")}} von Zeichenfolgen, von denen jede eine durch die {{cssxref("@layer")}}-Anweisung dargestellte Kaskadenebene darstellt.

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
- [Die `@layer`-Anweisung für benannte Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
