---
title: "CSS: highlights statische Eigenschaft"
short-title: highlights
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSSOM")}}

Die statische, schreibgeschützte **`highlights`** Eigenschaft der [`CSS`](/de/docs/Web/API/CSS)-Schnittstelle ermöglicht den Zugriff auf das `HighlightRegistry`, das zum Stylen beliebiger Textbereiche unter Verwendung der [CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api) genutzt wird.

## Wert

Das [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Objekt.

## Beispiele

Das folgende Beispiel demonstriert das Erstellen mehrerer Textbereiche, das Erstellen eines `Highlight`-Objekts für diese, das Registrieren dieses Highlights im `HighlightRegistry`, und schließlich das Stylen der Textbereiche mithilfe des {{cssxref("::highlight", "::highlight()")}} Pseudoelements.

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Markierens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
