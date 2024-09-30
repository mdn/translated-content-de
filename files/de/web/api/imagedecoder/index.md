---
title: ImageDecoder
slug: Web/API/ImageDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageDecoder`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) bietet eine Möglichkeit, kodierte Bilddaten zu entpacken und zu dekodieren.

## Konstruktor

- [`ImageDecoder()`](/de/docs/Web/API/ImageDecoder/ImageDecoder) {{Experimental_Inline}}
  - : Erstellt ein neues `ImageDecoder`-Objekt.

## Instanz-Eigenschaften

- [`ImageDecoder.complete`](/de/docs/Web/API/ImageDecoder/complete) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die kodierten Daten vollständig gepuffert sind.
- [`ImageDecoder.completed`](/de/docs/Web/API/ImageDecoder/completed) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald `complete` wahr ist.
- [`ImageDecoder.tracks`](/de/docs/Web/API/ImageDecoder/tracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Objekt zurück, das die verfügbaren Spuren auflistet und eine Methode zum Auswählen einer zu dekodierenden Spur bereitstellt.
- [`ImageDecoder.type`](/de/docs/Web/API/ImageDecoder/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) widerspiegelt, der während der Erstellung konfiguriert wurde.

## Statische Methoden

- [`ImageDecoder.isTypeSupported()`](/de/docs/Web/API/ImageDecoder/isTypeSupported_static) {{Experimental_Inline}}
  - : Gibt an, ob der bereitgestellte [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) für das Entpacken und Dekodieren unterstützt wird.

## Instanz-Methoden

- [`ImageDecoder.close()`](/de/docs/Web/API/ImageDecoder/close) {{Experimental_Inline}}
  - : Beendet alle anstehenden Arbeiten und gibt Systemressourcen frei.
- [`ImageDecoder.decode()`](/de/docs/Web/API/ImageDecoder/decode) {{Experimental_Inline}}
  - : Stellt eine Steuerungsnachricht zum Dekodieren des Rahmens eines Bildes in die Warteschlange.
- [`ImageDecoder.reset()`](/de/docs/Web/API/ImageDecoder/reset) {{Experimental_Inline}}
  - : Bricht alle ausstehenden `decode()`-Operationen ab.

## Beispiele

Gegeben ein {{HTMLElement("canvas")}}-Element:

```html
<canvas></canvas>
```

dekodiert und rendert der folgende Code ein animiertes Bild auf diese Leinwand:

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
