---
title: "MediaStream: getAudioTracks()-Methode"
short-title: getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
l10n:
  sourceCommit: d8a660f63ae6e2e8a1dba567c1398f72a09f9658
---

{{APIRef("Media Capture and Streams")}}

Die **`getAudioTracks()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle gibt eine Sequenz zurück, die alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte im [track set](https://www.w3.org/TR/mediacapture-streams/#dfn-track-set) des Streams repräsentiert, bei denen [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist.

## Syntax

```js-nolint
getAudioTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, jeweils eines für jeden Audiotrack im Stream. Audiotracks sind jene Tracks, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft `audio` ist. Das Array ist leer, wenn der Stream keine Audiotracks enthält.

> [!NOTE]
> Die Reihenfolge der zurückgegebenen Tracks ist durch die Spezifikation nicht definiert und kann sich tatsächlich von einem Aufruf der `getAudioTracks()`-Methode zum nächsten ändern.

In frühen Versionen dieser API gab es eine spezielle `AudioStreamTrack`-Schnittstelle, die als Typ für jeden Eintrag in der Liste der Audiostreams verwendet wurde; dies wurde jedoch inzwischen in die Haupt- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle integriert.

## Beispiele

Dieses Beispiel bezieht den Audio- und Videostream einer Webcam mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), fügt den Stream einem {{HTMLElement("video")}}-Element hinzu und legt dann einen Timer fest, der beim Auslaufen den ersten im Stream gefundenen Audiotrack stoppt.

```js
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // Stop the audio stream after 5 seconds
    setTimeout(() => {
      const tracks = mediaStream.getAudioTracks();
      tracks[0].stop();
    }, 5000);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
