---
title: "MediaSource: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/MediaSource/readyState
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

Die **`readyState`** schreibgeschützte Eigenschaft der
{{domxref("MediaSource")}}-Schnittstelle gibt ein Enum zurück, das den Zustand der
aktuellen `MediaSource` darstellt. Die drei möglichen Werte sind:

- `closed`: Die Quelle ist derzeit nicht an ein Media-Element angehängt.
- `open`: Die Quelle ist an ein Media-Element angehängt und bereit, um
  {{domxref("SourceBuffer")}}-Objekte zu empfangen.
- `ended`: Die Quelle ist an ein Media-Element angehängt, aber der Stream wurde
  durch einen Aufruf von {{domxref("MediaSource.endOfStream()")}} beendet.

## Wert

Ein String.

## Beispiele

Das folgende Snippet stammt aus einem einfachen Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für eine weitere Untersuchung). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
