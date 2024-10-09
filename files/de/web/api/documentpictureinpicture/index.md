---
title: DocumentPictureInPicture
slug: Web/API/DocumentPictureInPicture
l10n:
  sourceCommit: 26aaa0b6f92933d915563b1d1210cc46f4ec0e09
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`DocumentPictureInPicture`** Interface der [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ist der Einstiegspunkt zur Erstellung und Verwaltung von Dokument-Picture-in-Picture-Fenstern.

Es wird über die [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`window`](/de/docs/Web/API/DocumentPictureInPicture/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine [`Window`](/de/docs/Web/API/Window) Instanz zurück, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) {{Experimental_Inline}}
  - : Öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window) Instanz erfüllt wird, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Picture-in-Picture-Fenster erfolgreich geöffnet wird.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Open a Picture-in-Picture window.
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

Sehen Sie sich das [Document Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige, funktionierende Demo an (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
