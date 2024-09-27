---
title: "MediaSource: activeSourceBuffers-Eigenschaft"
short-title: activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`activeSourceBuffers`** der [`MediaSource`](/de/docs/Web/API/MediaSource)-Schnittstelle gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das eine Teilmenge der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die in [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) enthalten sind — die Liste von Objekten, die die ausgewählte Videospur, aktivierten Audiospuren und angezeigten/ausgeblendeten Textspuren bereitstellen.

## Wert

Ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList), das die [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für jede der aktiven Spuren enthält.

## Beispiele

Das folgende Beispiel basiert auf einem einfachen Beispiel von Nick Desaulniers ([sehen Sie das vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für eine weitere Untersuchung). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(mediaSource.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.activeSourceBuffers);
      // will contain the source buffer that was added above,
      // as it is selected for playing in the video player
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
