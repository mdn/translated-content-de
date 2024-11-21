---
title: "MediaSource: endOfStream() Methode"
short-title: endOfStream()
slug: Web/API/MediaSource/endOfStream
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`endOfStream()`**-Methode des
[`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces signalisiert das Ende des Streams.

## Syntax

```js-nolint
endOfStream()
endOfStream(endOfStreamError)
```

### Parameter

- `endOfStreamError` {{optional_inline}}

  - : Ein String, der einen Fehler darstellt, der ausgelöst wird, wenn das Ende des Streams erreicht ist. Die möglichen Werte sind:

    - `network`
      - : Beendet die Wiedergabe und signalisiert, dass ein Netzwerkfehler aufgetreten ist. Dies kann verwendet werden, um einen benutzerdefinierten Fehlerbehandler im Zusammenhang mit Medienstreams zu erstellen. Zum Beispiel könnten Sie eine Funktion haben, die Medienchunk-Anfragen bearbeitet, separat von anderen Netzwerkanfragen. Wenn Sie eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage für einen Medienchunk stellen und einen Netzwerkfehler erhalten, könnten Sie `endOfStream('network')` aufrufen, eine beschreibende Nachricht in der Benutzeroberfläche anzeigen und möglicherweise die Netzwerk-Abfrage sofort erneut versuchen oder warten, bis das Netzwerk wieder verfügbar ist (durch eine Art von Polling).
    - `decode`
      - : Beendet die Wiedergabe und signalisiert, dass ein Dekodierungsfehler aufgetreten ist. Dies kann verwendet werden, um darauf hinzuweisen, dass ein Parsing-Fehler beim Abrufen von Mediendaten aufgetreten ist; möglicherweise sind die Daten beschädigt oder sie sind mit einem Codec kodiert, den der Browser nicht dekodieren kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) nicht gleich `open` ist oder eines oder mehrere der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) aktualisiert werden (d.h. deren [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft `true` ist).

## Beispiele

Das folgende Snippet stammt aus einem Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Sourcecode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt ein `MediaSource` zurück.

```js
const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
