---
title: "MediaSource: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/MediaSource/readyState
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`readyState`**-Eigenschaft des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces gibt ein Enum zurück, das den Status der aktuellen `MediaSource` repräsentiert. Die drei möglichen Werte sind:

- `closed`: Die Quelle ist momentan nicht an ein Medienelement angehängt.
- `open`: Die Quelle ist an ein Medienelement angehängt und bereit, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte zu empfangen.
- `ended`: Die Quelle ist an ein Medienelement angehängt, aber der Stream wurde durch einen Aufruf von [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) beendet.

## Wert

Ein String.

## Beispiele

Der folgende Ausschnitt stammt aus einem einfachen Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
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
