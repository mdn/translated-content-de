---
title: "MediaSource: activeSourceBuffers-Eigenschaft"
short-title: activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`activeSourceBuffers`** des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das eine Teilmenge der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, welche in [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) enthalten sind — der Liste von Objekten, die die ausgewählte Videospur, die aktivierten Audiospuren und die angezeigten/versteckten Textspuren bereitstellen.

## Wert

Eine [`SourceBufferList`](/de/docs/Web/API/SourceBufferList), die die [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für jede der aktiven Spuren enthält.

## Beispiele

Der folgende Ausschnitt basiert auf einem Beispiel von Nick Desaulniers ([sehen Sie das vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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
