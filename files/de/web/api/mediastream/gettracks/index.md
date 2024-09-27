---
title: "MediaStream: Methode getTracks()"
short-title: getTracks()
slug: Web/API/MediaStream/getTracks
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Capture and Streams")}}

Die Methode **`getTracks()`** der
[`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle gibt eine Sequenz zurück, die alle
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte in diesem
Stream's [Track-Set](https://www.w3.org/TR/mediacapture-streams/#track-set) darstellt, unabhängig von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind).

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
