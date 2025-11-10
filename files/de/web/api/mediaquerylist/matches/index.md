---
title: "MediaQueryList: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`matches`**-Eigenschaft des [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces ist ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt, oder `false`, wenn dies nicht der Fall ist.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis lauschen, das bei der `MediaQueryList` ausgelöst wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt; andernfalls ist er `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen in der Ausrichtung des Ansichtsfensters, indem eine Medienabfrage mit dem [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation)-Medienmerkmal erstellt wird:

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

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwendung von Medienabfragen im Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
