---
title: "MediaQueryListEvent: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryListEvent/media
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Die **`media`** Eigenschaft der Schnittstelle {{DOMxRef("MediaQueryListEvent")}} ist eine schreibgeschützte Zeichenkette, die eine serialisierte Media-Query darstellt.

## Wert

Eine Zeichenkette, die eine serialisierte Media-Query darstellt.

## Beispiele

```js
const para = document.querySelector("p"); // Dies ist das UI-Element, in dem der Text angezeigt wird
const mql = window.matchMedia("(max-width: 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // Der Viewport ist 600 Pixel breit oder weniger
    para.textContent = "Dies ist ein schmales Display — weniger als 600px breit.";
    document.body.style.backgroundColor = "red";
  } else {
    // Der Viewport ist mehr als 600 Pixel breit
    para.textContent = "Dies ist ein breites Display — mehr als 600px breit.";
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
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
