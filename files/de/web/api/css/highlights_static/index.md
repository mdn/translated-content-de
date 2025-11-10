---
title: "CSS: highlights Eigenschaft"
short-title: highlights
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die statische, schreibgeschützte **`highlights`** Eigenschaft des [`CSS`](/de/docs/Web/API/CSS) Interface bietet Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textranges mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu gestalten.

## Wert

Das [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie mehrere Textranges erstellt werden, dann ein `Highlight`-Objekt für diese erstellt, dieses Highlight im `HighlightRegistry` registriert und schließlich die Textranges mit dem {{cssxref("::highlight", "::highlight()")}} Pseudo-Element gestaltet werden.

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
- [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
- [CSS Custom Highlight API: Die Zukunft des Markierens von Textranges im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
