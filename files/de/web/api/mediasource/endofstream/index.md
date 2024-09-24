---
title: "MediaSource: endOfStream() Methode"
short-title: endOfStream()
slug: Web/API/MediaSource/endOfStream
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Media Source Extensions")}}

Die **`endOfStream()`** Methode des {{domxref("MediaSource")}} Interfaces signalisiert das Ende des Streams.

## Syntax

```js-nolint
endOfStream()
endOfStream(endOfStreamError)
```

### Parameter

- `endOfStreamError` {{optional_inline}}

  - : Ein String, der einen Fehler darstellt, der geworfen wird, wenn das Ende des Streams erreicht ist. Die möglichen Werte sind:

    - `network`
      - : Beendet die Wiedergabe und signalisiert, dass ein Netzwerkfehler aufgetreten ist. Dies kann verwendet werden, um einen benutzerdefinierten Fehlerhandler im Zusammenhang mit Medienstreams zu erstellen. Beispielsweise könnten Sie eine Funktion haben, die sich um Medienchunk-Anfragen kümmert, separat von anderen Netzwerk-Anfragen. Wenn Sie eine {{domxref("Window/fetch", "fetch()")}} Anfrage für ein Medienchunk machen und einen Netzwerkfehler erhalten, könnten Sie `endOfStream('network')` aufrufen, eine beschreibende Nachricht in der Benutzeroberfläche anzeigen und vielleicht die Netzwerk-Anfrage sofort wiederholen oder warten, bis das Netzwerk wieder verfügbar ist (über eine Art von Polling).
    - `decode`
      - : Beendet die Wiedergabe und signalisiert, dass ein Dekodierfehler aufgetreten ist. Dies kann verwendet werden, um anzuzeigen, dass ein Parsing-Fehler aufgetreten ist, während Mediendaten abgerufen werden; möglicherweise sind die Daten beschädigt oder sind mit einem Codec kodiert, den der Browser nicht dekodieren kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref("MediaSource.readyState")}} nicht gleich `open` ist, oder eines oder mehrere der {{domxref("SourceBuffer")}} Objekte in {{domxref("MediaSource.sourceBuffers")}} aktualisiert werden (d.h. ihre {{domxref("SourceBuffer.updating")}} Eigenschaft ist `true`.)

## Beispiele

Der folgende Ausschnitt stammt aus einem einfachen Beispiel von Nick Desaulniers ([sehen Sie die vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
