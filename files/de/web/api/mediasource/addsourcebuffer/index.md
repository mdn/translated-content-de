---
title: "MediaSource: addSourceBuffer()-Methode"
short-title: addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`addSourceBuffer()`**-Methode der [`MediaSource`](/de/docs/Web/API/MediaSource)-Schnittstelle erstellt einen neuen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) des angegebenen {{Glossary("MIME_type", "MIME-Typs")}} und fügt ihn der `sourceBuffers`-Liste der `MediaSource` hinzu. Der neue `SourceBuffer` wird ebenfalls zurückgegeben.

## Syntax

```js-nolint
addSourceBuffer(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den MIME-Typ des zu erstellenden und zur [`MediaSource`](/de/docs/Web/API/MediaSource) hinzuzufügenden [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) angibt.

### Rückgabewert

Ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt, das den neu erstellten und zur Mediensource hinzugefügten Source Buffer darstellt.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der für `mimeType` angegebene Wert ein leerer String ist und kein gültiger MIME-Typ.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sich die [`MediaSource`](/de/docs/Web/API/MediaSource) nicht im `"open"` [`readyState`](/de/docs/Web/API/MediaSource/readyState) befindet.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `mimeType` vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird oder nicht mit den MIME-Typen anderer [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte kompatibel ist, die bereits in der `sourceBuffers`-Liste der Mediensource enthalten sind.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User Agent keine weiteren `SourceBuffer`-Objekte verarbeiten kann oder wenn die Erstellung eines neuen `SourceBuffer` mit dem angegebenen `mimeType` zu einer [nicht unterstützten Konfiguration von `SourceBuffer`n](https://w3c.github.io/media-source/#sourcebuffer-configuration) führen würde.

## Beispiele

Das folgende Snippet stammt aus einem einfachen Beispiel von Nick Desaulniers ([sehen Sie die vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
const mediaSource = getMediaSource();

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  console.log(mediaSource.readyState); // closed
  mediaSource.addEventListener("sourceopen", sourceOpen);
  video.src = URL.createObjectURL(mediaSource);
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
