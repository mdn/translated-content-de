---
title: "MediaQueryList: change-Ereignis"
short-title: change
slug: Web/API/MediaQueryList/change_event
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Das **`change`**-Ereignis der {{DOMxRef("MediaQueryList")}}-Schnittstelle wird ausgelöst, wenn sich der Status der Medienabfrageunterstützung ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaQueryListEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaQueryListEvent")}}

## Ereigniseigenschaften

_Die `MediaQueryListEvent`-Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, {{DOMxRef("Event")}}._

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das {{DOMxRef("document")}} derzeit die Medienabfrageliste erfüllt, oder `false` andernfalls.
- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Medienabfrage darstellt.

## Beispiel

```js
const mql = window.matchMedia("(max-width: 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* das Ansichtsfenster ist 600 Pixel breit oder weniger */
    console.log("Dies ist ein schmaler Bildschirm — weniger als 600px breit.");
  } else {
    /* das Ansichtsfenster ist mehr als 600 Pixel breit */
    console.log("Dies ist ein breiter Bildschirm — mehr als 600px breit.");
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Medienabfragen aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
