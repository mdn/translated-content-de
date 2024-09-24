---
title: "MediaSource: sourceBuffers-Eigenschaft"
short-title: sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

Die schreibgeschützte **`sourceBuffers`**-Eigenschaft der {{domxref("MediaSource")}}-Schnittstelle gibt ein {{domxref("SourceBufferList")}}-Objekt zurück, das die Liste der mit diesem `MediaSource`-verbundenen {{domxref("SourceBuffer")}}-Objekte enthält.

## Wert

Ein {{domxref("SourceBufferList")}}.

## Beispiele

Der folgende Code basiert auf einem einfachen Beispiel von Nick Desaulniers ([sehen Sie das vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.sourceBuffers); // wird den oben hinzugefügten Source Buffer enthalten
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
