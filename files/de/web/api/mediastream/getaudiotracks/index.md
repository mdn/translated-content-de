---
title: "MediaStream: getAudioTracks() Methode"
short-title: getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getAudioTracks()`** Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle gibt eine Sequenz zurück, die alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte in der [Track-Menge](https://www.w3.org/TR/mediacapture-streams/#track-set) dieses Streams repräsentiert, bei denen [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist.

## Syntax

```js-nolint
getAudioTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, eines für jede Audiospur, die im Stream enthalten ist. Audiospuren sind diejenigen Spuren, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft `audio` ist. Das Array ist leer, wenn der Stream keine Audiospuren enthält.

> [!NOTE]
> Die Reihenfolge der zurückgegebenen Spuren ist in der
> Spezifikation nicht festgelegt und kann sich tatsächlich von einem Aufruf zu `getAudioTracks()`
> zum nächsten ändern.

Frühere Versionen dieser API enthalten eine spezielle `AudioStreamTrack`-Schnittstelle,
die als Typ für jeden Eintrag in der Liste der Audiospuren verwendet wurde; dies wurde jedoch in die Hauptschnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert.

## Beispiele

Dieses Beispiel erhält Audio und Video von einer Webcam in einem Stream über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), fügt den Stream an ein {{HTMLElement("video")}}-Element an und setzt dann einen Timer, der beim Ablauf die erste gefundene Audiospur im Stream stoppt.

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
