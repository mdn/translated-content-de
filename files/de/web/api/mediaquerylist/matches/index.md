---
title: "MediaQueryList: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`matches`**-Eigenschaft des [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces ist ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt, oder `false`, wenn nicht.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis überwachen, das bei der `MediaQueryList` ausgelöst wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt; andernfalls ist es `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen der Ausrichtung des Ansichtsfensters, indem eine Medienabfrage mit dem [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation)-Medienmerkmal erstellt wird:

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
