---
title: "MediaSource: sourceBuffers Eigenschaft"
short-title: sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`sourceBuffers`** der [`MediaSource`](/de/docs/Web/API/MediaSource)-Schnittstelle gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das die Liste von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten enthält, die mit diesem `MediaSource` verknüpft sind.

## Wert

Eine [`SourceBufferList`](/de/docs/Web/API/SourceBufferList).

## Beispiele

Der folgende Ausschnitt basiert auf einem einfachen Beispiel, das von Nick Desaulniers geschrieben wurde ([sehen Sie die vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die hier nicht definierte Funktion `getMediaSource()` gibt ein `MediaSource` zurück.

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
