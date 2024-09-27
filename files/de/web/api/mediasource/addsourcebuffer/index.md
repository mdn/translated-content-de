---
title: "MediaSource: Methode addSourceBuffer()"
short-title: addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`addSourceBuffer()`**-Methode des
[`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces erstellt ein neues [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) mit dem angegebenen [MIME-Typ](/de/docs/Glossary/MIME_type) und fügt es der `MediaSource`-[`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste hinzu. Das neue
`SourceBuffer` wird ebenfalls zurückgegeben.

## Syntax

```js-nolint
addSourceBuffer(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den MIME-Typ des zu erstellenden und hinzuzufügenden [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zur [`MediaSource`](/de/docs/Web/API/MediaSource) angibt.

### Rückgabewert

Ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt, das den neuen Quellpuffer darstellt, der erstellt und zur Mediendatei hinzugefügt wurde.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Wert für `mimeType` ein leerer String anstelle eines gültigen MIME-Typs ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`MediaSource`](/de/docs/Web/API/MediaSource) nicht im `"open"`-Zustand (`readyState`) ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `mimeType` vom [User-Agent](/de/docs/Glossary/user_agent) nicht unterstützt wird oder nicht mit den MIME-Typen anderer [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte kompatibel ist, die bereits in der `sourceBuffers`-Liste der Medienquelle enthalten sind.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent keine weiteren `SourceBuffer`-Objekte verarbeiten kann oder die Erstellung eines neuen `SourceBuffer` mit dem angegebenen `mimeType` zu einer [nicht unterstützten Konfiguration von `SourceBuffer`s](https://w3c.github.io/media-source/#sourcebuffer-configuration) führen würde.

## Beispiele

Der folgende Ausschnitt stammt aus einem einfachen Beispiel, geschrieben von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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
