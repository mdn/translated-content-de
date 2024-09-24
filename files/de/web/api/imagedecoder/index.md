---
title: ImageDecoder
slug: Web/API/ImageDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ImageDecoder`**-Schnittstelle der {{domxref('WebCodecs API','','','true')}} bietet eine Möglichkeit, kodierte Bilddaten zu entpacken und zu dekodieren.

## Konstruktor

- {{domxref("ImageDecoder.ImageDecoder", "ImageDecoder()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `ImageDecoder`-Objekt.

## Instanz-Eigenschaften

- {{domxref("ImageDecoder.complete")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die kodierten Daten vollständig gepuffert sind.
- {{domxref("ImageDecoder.completed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald `complete` wahr ist.
- {{domxref("ImageDecoder.tracks")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("ImageTrackList")}}-Objekt zurück, das die verfügbaren Spuren auflistet und eine Methode zum Auswählen einer zu dekodierenden Spur bereitstellt.
- {{domxref("ImageDecoder.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) widerspiegelt, der während der Konstruktion konfiguriert wurde.

## Statische Methoden

- {{domxref("ImageDecoder.isTypeSupported_static", "ImageDecoder.isTypeSupported()")}} {{Experimental_Inline}}
  - : Zeigt an, ob der bereitgestellte [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) für das Entpacken und Dekodieren unterstützt wird.

## Instanz-Methoden

- {{domxref("ImageDecoder.close()")}} {{Experimental_Inline}}
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.
- {{domxref("ImageDecoder.decode()")}} {{Experimental_Inline}}
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um das Bild eines Frames zu dekodieren.
- {{domxref("ImageDecoder.reset()")}} {{Experimental_Inline}}
  - : Bricht alle ausstehenden `decode()`-Operationen ab.

## Beispiele

Gegeben sei ein {{HTMLElement("canvas")}}-Element:

```html
<canvas></canvas>
```

Der folgende Code dekodiert ein animiertes Bild und rendert es auf dieser Leinwand:

```js
let imageDecoder = null;
let imageIndex = 0;

function renderImage(result) {
  const canvas = document.querySelector("canvas");
  const canvasContext = canvas.getContext("2d");

  canvasContext.drawImage(result.image, 0, 0);

  const track = imageDecoder.tracks.selectedTrack;

  // Wir überprüfen hier 'complete', da 'frameCount' nicht stabil ist, bis alle
  // Daten empfangen wurden. Dies kann dazu führen, dass wir einen RangeError
  // während des decode()-Aufrufs unten erhalten, der behandelt werden muss.
  if (imageDecoder.complete) {
    if (track.frameCount === 1) return;

    if (imageIndex + 1 >= track.frameCount) imageIndex = 0;
  }

  // Dekodiert den nächsten Frame im Voraus, damit er rechtzeitig bereitsteht.
  imageDecoder
    .decode({ frameIndex: ++imageIndex })
    .then((nextResult) =>
      setTimeout(() => {
        renderImage(nextResult);
      }, result.image.duration / 1000.0),
    )
    .catch((e) => {
      // Wir können dazu kommen, dass wir einen imageIndex anfordern, der
      // über das Ende hinausgeht, da wir einen ReadableStream von fetch()
      // verwenden. Wenn dies passiert, einfach wiederholen.
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
