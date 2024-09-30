---
title: "MediaSource: endOfStream()-Methode"
short-title: endOfStream()
slug: Web/API/MediaSource/endOfStream
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`endOfStream()`**-Methode des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces signalisiert das Ende des Streams.

## Syntax

```js-nolint
endOfStream()
endOfStream(endOfStreamError)
```

### Parameter

- `endOfStreamError` {{optional_inline}}

  - : Ein String, der einen Fehler repräsentiert, der ausgelöst wird, wenn das Ende des Streams erreicht ist. Die möglichen Werte sind:

    - `network`
      - : Beendet die Wiedergabe und signalisiert, dass ein Netzwerkfehler aufgetreten ist. Dies kann verwendet werden, um einen benutzerdefinierten Fehlerhandler im Zusammenhang mit Medienstreams zu erstellen. Zum Beispiel könnte eine Funktion existieren, die Medienchunk-Anfragen behandelt, getrennt von anderen Netzwerkanfragen. Wenn Sie eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage für einen Medienchunk durchführen und einen Netzwerkfehler erhalten, möchten Sie möglicherweise `endOfStream('network')` aufrufen, eine beschreibende Nachricht in der Benutzeroberfläche anzeigen und vielleicht die Netzwerkabfrage sofort erneut versuchen oder warten, bis das Netzwerk wieder verfügbar ist (über eine Art von Polling).
    - `decode`
      - : Beendet die Wiedergabe und signalisiert, dass ein Dekodierungsfehler aufgetreten ist. Dies kann verwendet werden, um anzuzeigen, dass ein Parsing-Fehler aufgetreten ist, während Mediendaten abgerufen werden; möglicherweise sind die Daten beschädigt oder sie sind mit einem Codec kodiert, den der Browser nicht dekodieren kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) nicht gleich `open` ist oder eines oder mehrere der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) gerade aktualisiert werden (d.h. ihre [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft ist `true`).

## Beispiele

Das folgende Codebeispiel stammt aus einem einfachen Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für eine weitere Untersuchung). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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
