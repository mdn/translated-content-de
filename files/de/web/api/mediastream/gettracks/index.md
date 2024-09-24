---
title: "MediaStream: getTracks() Methode"
short-title: getTracks()
slug: Web/API/MediaStream/getTracks
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Capture and Streams")}}

Die **`getTracks()`** Methode der {{domxref("MediaStream")}} Schnittstelle gibt eine Sequenz zurück, die alle {{domxref("MediaStreamTrack")}} Objekte in diesem Stream's [track set](https://www.w3.org/TR/mediacapture-streams/#track-set) repräsentiert, unabhängig vom {{domxref("MediaStreamTrack.kind")}}.

## Syntax

```js-nolint
getTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("MediaStreamTrack")}} Objekten.

## Beispiele

```js
navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // Stoppen Sie den Stream nach 5 Sekunden
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
