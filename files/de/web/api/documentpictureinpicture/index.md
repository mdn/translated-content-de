---
title: DokumentBildInBild
slug: Web/API/DocumentPictureInPicture
l10n:
  sourceCommit: 4bb7edfa824ee4790abe60637b7876acd3eb827d
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`DocumentPictureInPicture`**-Schnittstelle der {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} ist der Einstiegspunkt zum Erstellen und Verwalten von Dokument-Bild-in-Bild-Fenstern.

Sie wird über die Eigenschaft {{domxref("Window.documentPictureInPicture")}} aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("DocumentPictureInPicture.window", "window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine {{domxref("Window")}}-Instanz zurück, die den Browsing-Kontext innerhalb des Bild-in-Bild-Fensters darstellt.

## Instanzmethoden

- {{domxref("DocumentPictureInPicture.requestWindow", "requestWindow()")}} {{Experimental_Inline}}
  - : Öffnet das Bild-in-Bild-Fenster für den aktuellen Haupt-Browsing-Kontext. Gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("Window")}}-Instanz erfüllt wird, die den Browsing-Kontext im Bild-in-Bild-Fenster darstellt.

## Ereignisse

- {{domxref("DocumentPictureInPicture/enter_event", "enter")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Bild-in-Bild-Fenster erfolgreich geöffnet wurde.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Öffnen eines Bild-in-Bild-Fensters.
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

Sehen Sie sich das [Dokument Bild-in-Bild API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) für eine vollständige Demo an (siehe auch den vollständigen [Quellcode](https://github.com/chrisdavidmills/dom-examples/tree/main/document-picture-in-picture)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
