---
title: "MediaQueryList: change-Event"
short-title: change
slug: Web/API/MediaQueryList/change_event
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Das **`change`**-Event des [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces wird ausgelöst, wenn sich der Status der Unterstützung für Medienabfragen ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaQueryListEvent")}}

## Ereigniseigenschaften

_Das `MediaQueryListEvent`-Interface erbt Eigenschaften von seinem übergeordneten Interface, [`Event`](/de/docs/Web/API/Event)._

- [`MediaQueryListEvent.matches`](/de/docs/Web/API/MediaQueryListEvent/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) aktuell der Medienabfrageliste entspricht, oder `false`, wenn nicht.
- [`MediaQueryListEvent.media`](/de/docs/Web/API/MediaQueryListEvent/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Medienabfrage darstellt.

## Beispiel

```js
const mql = window.matchMedia("(width <= 600px)");

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

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Medienabfragen im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
