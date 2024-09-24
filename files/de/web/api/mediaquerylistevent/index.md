---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Das `MediaQueryListEvent`-Objekt speichert Informationen über die Änderungen, die an einem {{DOMxRef("MediaQueryList")}}-Objekt vorgenommen wurden — Instanzen sind als Ereignisobjekt in einer Funktion verfügbar, die durch ein {{DOMxRef("MediaQueryList.change_event", "change")}}-Ereignis referenziert wird.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("MediaQueryListEvent.MediaQueryListEvent()", "MediaQueryListEvent()")}}
  - : Erstellt eine neue Instanz von `MediaQueryListEvent`.

## Instanzeigenschaften

_Die `MediaQueryListEvent`-Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, {{DOMxRef("Event")}}._

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das {{DOMxRef("document")}} derzeit mit der Medienabfrageliste übereinstimmt, oder `false`, wenn nicht.
- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine serialisierte Medienabfrage darstellt.

## Instanzmethoden

_Die `MediaQueryListEvent`-Schnittstelle erbt Methoden von ihrer Elternschnittstelle, {{DOMxRef("Event")}}._

## Beispiele

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia("(max-width: 600px)");

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

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media-Queries aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
