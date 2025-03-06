---
title: "SVGElement: tabIndex-Eigenschaft"
short-title: tabIndex
slug: Web/API/SVGElement/tabIndex
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("SVG")}}

Die **`tabIndex`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle repräsentiert die Tabulatorreihenfolge des aktuellen SVG-Elements.

Die Tabulatorreihenfolge ist wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente, die denselben
   `tabIndex`-Wert haben, sollten in der Reihenfolge navigiert werden, in der sie erscheinen. Die Navigation
   erfolgt vom niedrigsten zum höchsten `tabIndex`.
2. Elemente, die das `tabIndex`-Attribut nicht unterstützen oder es unterstützen und
   `tabIndex` auf `0` setzen, in der Reihenfolge, in der sie erscheinen.

Elemente, die deaktiviert sind, nehmen nicht an der Tabulatorreihenfolge teil.

Die Werte müssen nicht sequentiell sein, noch müssen sie bei einem bestimmten Wert beginnen. Sie
dürfen sogar negativ sein, obwohl jeder Browser sehr große Werte beschneidet.

## Wert

Ein Integer.

## Beispiele

### Festlegen der `tabIndex`-Eigenschaft

```html
<svg id="svg1" tabindex="2" xmlns="http://www.w3.org/2000/svg" role="img">
  <circle cx="50" cy="50" r="40" fill="blue"></circle>
</svg>
<svg id="svg2" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect width="100" height="100" fill="green"></rect>
</svg>
```

```js
const svg1 = document.getElementById("svg1");
const svg2 = document.getElementById("svg2");

// Access and modify the tabIndex
console.log(svg1.tabIndex); // 2
svg2.tabIndex = 1; // Add svg2 to the tab order before svg1

// Programmatically focus on an element with negative tabIndex
svg1.tabIndex = -1;
svg1.focus(); // Works, even though it is not in the tabbing order
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex) eine ähnliche Methode für HTML-Elemente.
- [Barrierefreiheit von tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- Das HTML
  [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)
  globale Attribut.
