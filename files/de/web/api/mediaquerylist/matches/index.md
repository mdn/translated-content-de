---
title: "MediaQueryList: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Die **`matches`** schreibgeschützte Eigenschaft des
{{DOMxRef("MediaQueryList")}}-Interfaces ist ein Boolescher Wert, der
`true` zurückgibt, wenn das {{DOMxRef("document")}} momentan mit der Medienabfrageliste übereinstimmt,
oder `false`, wenn dies nicht der Fall ist.

Sie können benachrichtigt werden, wenn sich der Wert von `matches` ändert, indem Sie auf das
{{domxref("MediaQueryList.change_event", "change")}}-Ereignis hören, das bei der
`MediaQueryList` ausgelöst wird.

## Wert

Ein Boolescher Wert, der `true` ist, wenn das {{DOMxRef("document")}}
momentan mit der Medienabfrageliste übereinstimmt; andernfalls ist er `false`.

## Beispiele

Dieses Beispiel erkennt Änderungen der Viewport-Orientierung, indem eine Medienabfrage mit dem
[`orientation`](/de/docs/Web/CSS/@media/orientation)-Media-Feature erstellt wird:

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
- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
