---
title: "MediaSource: MediaSource() Konstruktor"
short-title: MediaSource()
slug: Web/API/MediaSource/MediaSource
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Source Extensions")}}

Der **`MediaSource()`** Konstruktor des
{{domxref("MediaSource")}} Interfaces erstellt und gibt ein neues
`MediaSource` Objekt ohne zugeordnete Quellpuffer zurück.

## Syntax

```js-nolint
new MediaSource()
```

### Parameter

Keine.

## Beispiele

Das folgende Snippet stammt aus einem einfachen Beispiel von Nick Desaulniers ([sehen Sie sich das vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen).

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
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

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
