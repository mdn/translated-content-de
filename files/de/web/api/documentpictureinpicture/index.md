---
title: DocumentPictureInPicture
slug: Web/API/DocumentPictureInPicture
l10n:
  sourceCommit: 4bb7edfa824ee4790abe60637b7876acd3eb827d
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`DocumentPictureInPicture`**-Interface der [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ist der Einstiegspunkt zum Erstellen und Verwalten von Dokument-Picture-in-Picture-Fenstern.

Es wird über die [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`window`](/de/docs/Web/API/DocumentPictureInPicture/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

## Instanzmethoden

- [`requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) {{Experimental_Inline}}
  - : Öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window)-Instanz erfüllt wird, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

## Ereignisse

- [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Picture-in-Picture-Fenster erfolgreich geöffnet wurde.

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

Sehen Sie sich das [Dokument Picture-in-Picture API-Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige funktionsfähige Demo an (sehen Sie auch den vollständigen [Quellcode](https://github.com/chrisdavidmills/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
