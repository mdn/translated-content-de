---
title: "MediaQueryList: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`matches`**-Eigenschaft der
[`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle ist ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt, oder `false`, wenn dies nicht der Fall ist.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis hören, das bei der `MediaQueryList` ausgelöst wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt; andernfalls ist es `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen in der Ausrichtung des Ansichtsfensters, indem es eine Medienabfrage mit dem [`orientation`](/de/docs/Web/CSS/@media/orientation)-Medienmerkmal erstellt:

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
- [Verwendung von Medienabfragen im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
