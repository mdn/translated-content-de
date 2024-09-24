---
title: "CSSLayerBlockRule: Eigenschaft name"
short-title: name
slug: Web/API/CSSLayerBlockRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der {{domxref("CSSLayerBlockRule")}}-Schnittstelle repräsentiert den Namen der zugehörigen Kaskadenschicht.

## Wert

Ein String, der den Namen der Schicht enthält, oder `""`, wenn die Schicht anonym ist.

## Beispiele

### HTML

```html
<output></output> <output></output>
```

### CSS

```css
output {
  display: block;
}

@layer special {
  div {
    color: rebeccapurple;
  }
}

@layer {
  div {
    color: black;
  }
}
```

### JavaScript

```js
const item1 = document.getElementsByTagName("output")[0];
const item2 = document.getElementsByTagName("output")[1];
const rules = document.styleSheets[1].cssRules;
// Beachten Sie, dass Stylesheet #1 das für dieses eingebettete Beispiel zugeordnete Stylesheet ist,
// während Stylesheet #0 das der gesamten MDN-Seite zugeordnete Stylesheet ist

const layer = rules[1]; // Eine CSSLayerBlockRule
const anonymous = rules[2]; // Eine anonyme CSSLayerBlockRule

item1.textContent = `Die erste CSSLayerBlockRule definiert die "${layer.name}" Schicht.`;
item2.textContent = `Eine zweite CSSLayerBlockRule definiert eine Schicht mit folgendem Namen: "${anonymous.name}".`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Anweisungserklärung einer {{cssxref("@layer")}} wird durch eine {{domxref("CSSLayerStatementRule")}} dargestellt.
- Wie man [benannte Kaskadenschichten erstellt](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#creating_cascade_layers) in CSS.
