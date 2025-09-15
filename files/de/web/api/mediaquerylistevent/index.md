---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Das `MediaQueryListEvent`-Objekt speichert Informationen über die Änderungen, die an einem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erfolgt sind — Instanzen stehen als Ereignisobjekt in einer Funktion zur Verfügung, die durch ein [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis referenziert wird.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaQueryListEvent()`](/de/docs/Web/API/MediaQueryListEvent/MediaQueryListEvent)
  - : Erstellt eine neue `MediaQueryListEvent`-Instanz.

## Instanz-Eigenschaften

_Die `MediaQueryListEvent`-Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MediaQueryListEvent.matches`](/de/docs/Web/API/MediaQueryListEvent/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Medienabfrageliste übereinstimmt, oder `false`, wenn nicht.
- [`MediaQueryListEvent.media`](/de/docs/Web/API/MediaQueryListEvent/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Medienabfrage darstellt.

## Instanz-Methoden

_Die `MediaQueryListEvent`-Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

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
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
