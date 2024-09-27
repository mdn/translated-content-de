---
title: "MediaSource: sourceBuffers-Eigenschaft"
short-title: sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`sourceBuffers`**-Eigenschaft des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das die Liste der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die mit dieser `MediaSource` verknüpft sind.

## Wert

Ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList).

## Beispiele

Der folgende Codeausschnitt basiert auf einem einfachen Beispiel von Nick Desaulniers ([sehen Sie sich die komplette Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.sourceBuffers); // will contain the source buffer that was added above
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

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
