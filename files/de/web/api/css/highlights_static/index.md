---
title: "CSS: `highlights` statische Eigenschaft"
short-title: highlights
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: 6afd6f5230eb0735348582b3519efce8994116ad
---

{{APIRef("CSSOM")}}

Die statische, schreibgeschützte **`highlights`**-Eigenschaft der [`CSS`](/de/docs/Web/API/CSS)-Schnittstelle ermöglicht den Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textranges mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu stylen.

## Wert

Das [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie mehrere Textranges erstellt werden, dann ein `Highlight`-Objekt für diese erstellt und dieses Highlight im `HighlightRegistry` registriert wird, um schließlich die Textranges mit dem {{cssxref("::highlight", "::highlight()")}} Pseudo-Element zu stylen.

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
- [CSS Custom Highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API)-Modul
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textranges im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
