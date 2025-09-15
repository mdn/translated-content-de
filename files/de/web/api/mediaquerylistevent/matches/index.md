---
title: "MediaQueryListEvent: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryListEvent/matches
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die **`matches`**-Eigenschaft der schreibgeschützten
[`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Schnittstelle ist ein boolescher Wert, der
`true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt,
oder `false`, wenn nicht.

## Wert

Ein boolescher Wert; gibt `true` zurück, wenn das [`document`](/de/docs/Web/API/Document)
derzeit mit der Medienabfrageliste übereinstimmt, `false` wenn nicht.

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
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
