---
title: "MediaQueryListEvent: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryListEvent/matches
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}

Die **`matches`** schreibgeschützte Eigenschaft des
[`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Interfaces ist ein boolescher Wert, der
`true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media Query-Liste entspricht, oder `false`, wenn nicht.

## Wert

Ein boolescher Wert; gibt `true` zurück, wenn das [`document`](/de/docs/Web/API/Document)
derzeit der Media Query-Liste entspricht, andernfalls `false`.

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

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
