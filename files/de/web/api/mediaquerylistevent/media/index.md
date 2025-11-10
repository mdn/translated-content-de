---
title: "MediaQueryListEvent: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryListEvent/media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}

Die **`media`**-Eigenschaft der
[`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Schnittstelle ist schreibgeschützt und stellt eine Zeichenfolge dar, die eine serialisierte Medienabfrage repräsentiert.

## Wert

Eine Zeichenfolge, die eine serialisierte Medienabfrage darstellt.

## Beispiele

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia("(width <= 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 600 pixels wide or less
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    // The viewport is more than 600 pixels wide
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }

  console.log(event.media);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Medienabfragen im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
