---
title: "CSSLayerStatementRule: nameList-Eigenschaft"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`nameList`**-Eigenschaft der Schnittstelle [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule) gibt die Liste der zugehörigen Cascade-Layer-Namen zurück. Die Namen können nicht geändert werden.

## Wert

Ein {{jsxref("Array")}} von Zeichenketten, die jeweils eine durch die {{cssxref("@layer")}}-Statement-Regel dargestellte Cascade-Layer repräsentieren.

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
- [Die `@layer`-Statement-Regel für benannte Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
