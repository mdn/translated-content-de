---
title: "MediaStream: getTracks()-Methode"
short-title: getTracks()
slug: Web/API/MediaStream/getTracks
l10n:
  sourceCommit: d8a660f63ae6e2e8a1dba567c1398f72a09f9658
---

{{APIRef("Media Capture and Streams")}}

Die **`getTracks()`**-Methode des
[`MediaStream`](/de/docs/Web/API/MediaStream)-Interfaces gibt eine Sequenz zurück, die alle
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte in diesem
Stream's [Track-Set](https://www.w3.org/TR/mediacapture-streams/#dfn-track-set) repräsentiert,
unabhängig von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind).

## Syntax

```js-nolint
getTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten.

## Beispiele

```js
navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // Stop the stream after 5 seconds
    setTimeout(() => {
      const tracks = mediaStream.getTracks();
      tracks[0].stop();
    }, 5000);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
