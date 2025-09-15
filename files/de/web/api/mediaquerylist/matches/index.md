---
title: "MediaQueryList: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`matches`**-Eigenschaft des [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces ist ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt, oder `false`, wenn nicht.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis am `MediaQueryList` beobachten.

## Wert

Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt; andernfalls ist es `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen der Ansichtsfensterorientierung, indem es eine Medienabfrage mit dem [`orientation`](/de/docs/Web/CSS/@media/orientation)-Medienmerkmal erstellt:

```js
const mql = window.matchMedia("(orientation:landscape)");
mql.addEventListener("change", (event) => {
  if (event.matches) {
    console.log("Now in landscape orientation");
  } else {
    console.log("Now in portrait orientation");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Medienabfragen aus Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
