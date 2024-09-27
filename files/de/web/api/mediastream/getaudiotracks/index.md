---
title: "MediaStream: Methode getAudioTracks()"
short-title: getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getAudioTracks()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle gibt eine Sequenz zurück, die alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte im [Track-Set](https://www.w3.org/TR/mediacapture-streams/#track-set) dieses Streams repräsentiert, bei denen [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist.

## Syntax

```js-nolint
getAudioTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, eines für jeden Audiotrack im Stream. Audiotracks sind diejenigen, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft `audio` ist. Das Array ist leer, wenn der Stream keine Audiotracks enthält.

> [!NOTE]
> Die Reihenfolge der zurückgegebenen Tracks ist durch die Spezifikation nicht definiert und kann sich tatsächlich von einem Aufruf von `getAudioTracks()` zum nächsten ändern.

Frühere Versionen dieser API beinhalteten ein spezielles `AudioStreamTrack`-Interface, das als Typ für jeden Eintrag in der Liste der Audiostreams verwendet wurde; dies wurde jedoch inzwischen in die Hauptschnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert.

## Beispiele

Dieses Beispiel bezieht den Audio- und Videostream einer Webcam mithilfe von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), verbindet den Stream mit einem {{HTMLElement("video")}}-Element und setzt dann einen Timer, der beim Ablauf den ersten auf dem Stream gefundenen Audiotrack stoppt.

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
