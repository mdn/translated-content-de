---
title: "CSSLayerBlockRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSLayerBlockRule/name
l10n:
  sourceCommit: d7e665f6202179fcccbe753a1bfd358c224c3928
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)-Schnittstelle repräsentiert den Namen der zugehörigen Kaskadenschicht.

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
const rules = document.getElementById("css-output").sheet.cssRules;

const layer = rules[1]; // A CSSLayerBlockRule
const anonymous = rules[2]; // An anonymous CSSLayerBlockRule

item1.textContent = `The first CSSLayerBlockRule defines the "${layer.name}" layer.`;
item2.textContent = `A second CSSLayerBlockRule defines a layer with the following name: "${anonymous.name}".`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Deklaration einer {{cssxref("@layer")}}-Anweisung wird durch ein [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule) dargestellt.
- Anleitung zum [Erstellen benannter Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#creating_cascade_layers) in CSS.
