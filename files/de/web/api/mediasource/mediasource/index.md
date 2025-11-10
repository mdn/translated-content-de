---
title: "MediaSource: MediaSource() Konstruktor"
short-title: MediaSource()
slug: Web/API/MediaSource/MediaSource
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`MediaSource()`** Konstruktor des
[`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces konstruiert und gibt ein neues
`MediaSource`-Objekt ohne zugehörige Quellpuffer zurück.

## Syntax

```js-nolint
new MediaSource()
```

### Parameter

Keine.

## Beispiele

Der folgende Codeausschnitt stammt aus einem Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) zur weiteren Untersuchung).

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  // console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
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
