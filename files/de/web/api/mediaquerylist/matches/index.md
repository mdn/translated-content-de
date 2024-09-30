---
title: "MediaQueryList: matches Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Die **`matches`** Nur-Lese-Eigenschaft der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle ist ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media-Query-Liste entspricht, oder `false`, wenn nicht.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis achten, das bei der `MediaQueryList` ausgelöst wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media-Query-Liste entspricht; andernfalls ist es `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen der Ansichtsausrichtung, indem eine Media-Query mit der [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienfunktion erstellt wird:

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

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
