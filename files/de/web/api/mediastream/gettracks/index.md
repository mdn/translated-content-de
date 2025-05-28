---
title: "MediaStream: getTracks()-Methode"
short-title: getTracks()
slug: Web/API/MediaStream/getTracks
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Media Capture and Streams")}}

Die **`getTracks()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle gibt eine Sequenz zurück, die alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte in diesem Stream repräsentiert, unabhängig von ihrer [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind).

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
