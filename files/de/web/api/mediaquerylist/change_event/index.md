---
title: "MediaQueryList: change Ereignis"
short-title: change
slug: Web/API/MediaQueryList/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("CSSOM")}}

Das **`change`** Ereignis der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle wird ausgelöst, wenn sich der Status der Unterstützung von Media-Queries ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaQueryListEvent")}}

## Ereigniseigenschaften

_Die `MediaQueryListEvent`-Schnittstelle erbt Eigenschaften von ihrer Elternebene, [`Event`](/de/docs/Web/API/Event)._

- [`MediaQueryListEvent.matches`](/de/docs/Web/API/MediaQueryListEvent/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media-Query-Liste entspricht, oder `false`, wenn nicht.
- [`MediaQueryListEvent.media`](/de/docs/Web/API/MediaQueryListEvent/media) {{ReadOnlyInline}}
  - : Ein String, der eine serielle Media-Query darstellt.

## Beispiel

```js
const mql = window.matchMedia("(max-width: 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    console.log("This is a narrow screen — less than 600px wide.");
  } else {
    /* the viewport is more than 600 pixels wide */
    console.log("This is a wide screen — more than 600px wide.");
  }
};
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
