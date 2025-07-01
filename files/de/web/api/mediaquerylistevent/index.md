---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Das `MediaQueryListEvent`-Objekt speichert Informationen über die Änderungen, die an einem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt vorgenommen wurden — Instanzen sind als Ereignisobjekt in einer Funktion verfügbar, die durch ein [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis referenziert wird.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaQueryListEvent()`](/de/docs/Web/API/MediaQueryListEvent/MediaQueryListEvent)
  - : Erstellt eine neue Instanz von `MediaQueryListEvent`.

## Instanzeigenschaften

_Das `MediaQueryListEvent`-Interface erbt Eigenschaften von seinem Elterninterface, [`Event`](/de/docs/Web/API/Event)._

- [`MediaQueryListEvent.matches`](/de/docs/Web/API/MediaQueryListEvent/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) aktuell mit der Medienabfrageliste übereinstimmt, oder `false`, wenn nicht.
- [`MediaQueryListEvent.media`](/de/docs/Web/API/MediaQueryListEvent/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Medienabfrage darstellt.

## Instanzmethoden

_Das `MediaQueryListEvent`-Interface erbt Methoden von seinem Elterninterface, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia("(width <= 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 600 pixels wide or less
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    // The viewport is more than 600 pixels wide
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
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
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
