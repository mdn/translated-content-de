---
title: "MediaQueryListEvent: media Eigenschaft"
short-title: media
slug: Web/API/MediaQueryListEvent/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`media`** des
[`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Interfaces ist ein String, der eine serialisierte Media Query darstellt.

## Wert

Ein String, der eine serialisierte Media Query darstellt.

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

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
