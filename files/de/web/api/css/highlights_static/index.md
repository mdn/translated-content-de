---
title: "CSS: highlights statische Eigenschaft"
short-title: highlights
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSSOM")}}

Die statische, schreibgeschützte **`highlights`** Eigenschaft des {{domxref("CSS")}} Interface bietet Zugriff auf das `HighlightRegistry`, welches zur Stilisierung beliebiger Textbereiche mit der {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}} verwendet wird.

## Wert

Das {{DOMxRef("HighlightRegistry")}} Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie mehrere Textbereiche erstellt werden, dann ein `Highlight`-Objekt für diese erstellt, dieses Highlight im `HighlightRegistry` registriert wird und schließlich die Textbereiche mithilfe des {{cssxref("::highlight", "::highlight()")}} Pseudoelements gestylt werden.

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

const myCustomHighlight = new Highlight(range1, range2);

CSS.highlights.set("my-custom-highlight", myCustomHighlight);
```

```css
::highlight(my-custom-highlight) {
  background-color: yellow;
  color: black;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
