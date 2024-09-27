---
title: ImageDecoder
slug: Web/API/ImageDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ImageDecoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) bietet eine Möglichkeit, codierte Bilddaten zu entpacken und zu decodieren.

## Konstruktor

- [`ImageDecoder()`](/de/docs/Web/API/ImageDecoder/ImageDecoder) {{Experimental_Inline}}
  - : Erstellt ein neues `ImageDecoder`-Objekt.

## Instanzeigenschaften

- [`ImageDecoder.complete`](/de/docs/Web/API/ImageDecoder/complete) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die codierten Daten vollständig gepuffert sind.
- [`ImageDecoder.completed`](/de/docs/Web/API/ImageDecoder/completed) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald `complete` wahr ist.
- [`ImageDecoder.tracks`](/de/docs/Web/API/ImageDecoder/tracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Objekt zurück, das die verfügbaren Tracks auflistet und eine Methode zum Auswählen eines Tracks zum Decodieren bietet.
- [`ImageDecoder.type`](/de/docs/Web/API/ImageDecoder/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den während der Konstruktion konfigurierten [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) widerspiegelt.

## Statische Methoden

- [`ImageDecoder.isTypeSupported()`](/de/docs/Web/API/ImageDecoder/isTypeSupported_static) {{Experimental_Inline}}
  - : Zeigt an, ob der angegebene [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) zum Entpacken und Decodieren unterstützt wird.

## Instanzmethoden

- [`ImageDecoder.close()`](/de/docs/Web/API/ImageDecoder/close) {{Experimental_Inline}}
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.
- [`ImageDecoder.decode()`](/de/docs/Web/API/ImageDecoder/decode) {{Experimental_Inline}}
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um das Bild zu decodieren.
- [`ImageDecoder.reset()`](/de/docs/Web/API/ImageDecoder/reset) {{Experimental_Inline}}
  - : Bricht alle ausstehenden `decode()`-Operationen ab.

## Beispiele

Gegeben ein {{HTMLElement("canvas")}}-Element:

```html
<canvas></canvas>
```

Der folgende Code decodiert und rendert ein animiertes Bild auf diese Leinwand:

```js
let imageDecoder = null;
let imageIndex = 0;

function renderImage(result) {
  const canvas = document.querySelector("canvas");
  const canvasContext = canvas.getContext("2d");

  canvasContext.drawImage(result.image, 0, 0);

  const track = imageDecoder.tracks.selectedTrack;

  // We check complete here since `frameCount` won't be stable until all
  // data has been received. This may cause us to receive a RangeError
  // during the decode() call below which needs to be handled.
  if (imageDecoder.complete) {
    if (track.frameCount === 1) return;

    if (imageIndex + 1 >= track.frameCount) imageIndex = 0;
  }

  // Decode the next frame ahead of display so it's ready in time.
  imageDecoder
    .decode({ frameIndex: ++imageIndex })
    .then((nextResult) =>
      setTimeout(() => {
        renderImage(nextResult);
      }, result.image.duration / 1000.0),
    )
    .catch((e) => {
      // We can end up requesting an imageIndex past the end since
      // we're using a ReadableStream from fetch(), when this happens
      // just wrap around.
      if (e instanceof RangeError) {
        imageIndex = 0;
        imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
      } else {
        throw e;
      }
    });
}

function decodeImage(imageByteStream) {
  imageDecoder = new ImageDecoder({ data: imageByteStream, type: "image/gif" });
  imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
}

fetch("fancy.gif").then((response) => decodeImage(response.body));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
