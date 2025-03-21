---
title: "CSS: highlights Static-Eigenschaft"
short-title: highlights
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSSOM")}}

Die statische, schreibgeschützte **`highlights`**-Eigenschaft des [`CSS`](/de/docs/Web/API/CSS)-Interfaces ermöglicht den Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textbereiche mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu stylen.

## Wert

Das [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie mehrere Textbereiche erstellt, dann ein `Highlight`-Objekt für diese Bereiche erstellt, dieses Highlight im `HighlightRegistry` registriert und schließlich die Textbereiche mit dem {{cssxref("::highlight", "::highlight()")}}-Pseudo-Element gestylt werden.

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
