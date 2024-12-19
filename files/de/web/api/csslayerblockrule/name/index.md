---
title: "CSSLayerBlockRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSLayerBlockRule/name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)-Schnittstelle stellt den Namen der zugehörigen Kaskadenschicht dar.

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
// Note that stylesheet #1 is the stylesheet associated with this embedded example,
// while stylesheet #0 is the stylesheet associated with the whole MDN page

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

- Die Deklaration der Anweisung eines {{cssxref("@layer")}} wird durch eine [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule) dargestellt.
- Anleitung zum [Erstellen benannter Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#creating_cascade_layers) in CSS.
