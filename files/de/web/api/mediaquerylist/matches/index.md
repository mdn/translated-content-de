---
title: "MediaQueryList: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`matches`**-Eigenschaft der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle ist ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit die Medienabfrageliste erfüllt, oder `false`, wenn nicht.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis achten, das bei der `MediaQueryList` ausgelöst wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit die Medienabfrageliste erfüllt; andernfalls ist er `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen der Ausrichtung des Ansichtsfensters, indem es eine Medienabfrage mit der {{cssxref("@media/orientation")}}-Medienfunktion erstellt:

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
