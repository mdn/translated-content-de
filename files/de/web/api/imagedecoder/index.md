---
title: ImageDecoder
slug: Web/API/ImageDecoder
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ImageDecoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) bietet eine Möglichkeit, kodierte Bilddaten zu entpacken und zu dekodieren.

## Konstruktor

- [`ImageDecoder()`](/de/docs/Web/API/ImageDecoder/ImageDecoder)
  - : Erstellt ein neues `ImageDecoder`-Objekt.

## Instanz-Eigenschaften

- [`ImageDecoder.complete`](/de/docs/Web/API/ImageDecoder/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die kodierten Daten vollständig gepuffert sind.
- [`ImageDecoder.completed`](/de/docs/Web/API/ImageDecoder/completed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald `complete` den Wert true hat.
- [`ImageDecoder.tracks`](/de/docs/Web/API/ImageDecoder/tracks) {{ReadOnlyInline}}
  - : Gibt ein [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Objekt zurück, das die verfügbaren Tracks auflistet und eine Methode zum Auswählen eines zu dekodierenden Tracks bereitstellt.
- [`ImageDecoder.type`](/de/docs/Web/API/ImageDecoder/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) widerspiegelt, der während der Konstruktion konfiguriert wurde.

## Statische Methoden

- [`ImageDecoder.isTypeSupported()`](/de/docs/Web/API/ImageDecoder/isTypeSupported_static)
  - : Gibt an, ob der bereitgestellte [MIME-Typ](/de/docs/Web/HTTP/MIME_types) für das Entpacken und Dekodieren unterstützt wird.

## Instanz-Methoden

- [`ImageDecoder.close()`](/de/docs/Web/API/ImageDecoder/close)
  - : Beendet alle anstehenden Arbeiten und gibt Systemressourcen frei.
- [`ImageDecoder.decode()`](/de/docs/Web/API/ImageDecoder/decode)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um den Frame eines Bildes zu dekodieren.
- [`ImageDecoder.reset()`](/de/docs/Web/API/ImageDecoder/reset)
  - : Bricht alle anstehenden `decode()`-Operationen ab.

## Beispiele

Gegeben ist ein {{HTMLElement("canvas")}}-Element:

```html
<canvas></canvas>
```

Der folgende Code dekodiert und rendert ein animiertes Bild auf diese Leinwand:

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
