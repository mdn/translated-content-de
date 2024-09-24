---
title: "MediaSource: activeSourceBuffers-Eigenschaft"
short-title: activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

Die **`activeSourceBuffers`** schreibgeschützte Eigenschaft der
{{domxref("MediaSource")}}-Schnittstelle gibt ein {{domxref("SourceBufferList")}}-Objekt
zurück, das eine Teilmenge der {{domxref("SourceBuffer")}}-Objekte enthält, die in
{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} enthalten sind — die Liste der Objekte,
die die ausgewählte Videospur, aktivierte Audiospuren und angezeigte/versteckte Textspuren bereitstellen.

## Wert

Ein {{domxref("SourceBufferList")}}, das die {{domxref("SourceBuffer")}}-Objekte
für jede der aktiven Spuren enthält.

## Beispiele

Das folgende Snippet basiert auf einem einfachen Beispiel, das von Nick Desaulniers geschrieben wurde ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
