---
title: "MediaStream: Methode getAudioTracks()"
short-title: getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Media Capture and Streams")}}

Die **`getAudioTracks()`**-Methode des
[`MediaStream`](/de/docs/Web/API/MediaStream)-Interfaces gibt eine Sequenz zurück, die alle
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte im [Track-Set](https://w3c.github.io/mediacapture-main/#dfn-track-set) dieses Streams darstellt, bei denen [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)
`audio` ist.

## Syntax

```js-nolint
getAudioTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, eines für jeden im Stream enthaltenen Audiotrack. Audiotracks sind jene Tracks, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft `audio` ist. Das Array ist leer, wenn der Stream keine Audiotracks enthält.

> [!NOTE]
> Die Reihenfolge der zurückgegebenen Tracks wird von der Spezifikation nicht definiert und kann sich tatsächlich von einem Aufruf von `getAudioTracks()` zum nächsten ändern.

Frühere Versionen dieser API enthielten ein spezielles `AudioStreamTrack`-Interface, das als Typ für jeden Eintrag in der Liste der Audiostreams verwendet wurde; dies wurde jedoch inzwischen in das Haupt-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interface integriert.

## Beispiele

Dieses Beispiel erhält den Audio- und Videostream einer Webcam mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), bringt den Stream in ein {{HTMLElement("video")}}-Element ein und setzt dann einen Timer, der beim Ablaufen den ersten im Stream gefundenen Audiotrack stoppt.

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
