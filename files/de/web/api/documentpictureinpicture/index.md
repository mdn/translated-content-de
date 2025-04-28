---
title: DocumentPictureInPicture
slug: Web/API/DocumentPictureInPicture
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`DocumentPictureInPicture`**-Interface der [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ist der Einstiegspunkt für die Erstellung und Verwaltung von Dokument-Picture-in-Picture-Fenstern.

Es wird über die [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`window`](/de/docs/Web/API/DocumentPictureInPicture/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters darstellt.

## Instanzmethoden

_Übernimmt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) {{Experimental_Inline}}
  - : Öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window)-Instanz erfüllt wird, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters darstellt.

## Ereignisse

_Übernimmt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Picture-in-Picture-Fenster erfolgreich geöffnet wird.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// …

// Open a Picture-in-Picture window.
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// …
```

Siehe [Document Picture-in-Picture API Example](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständig funktionierende Demo (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
