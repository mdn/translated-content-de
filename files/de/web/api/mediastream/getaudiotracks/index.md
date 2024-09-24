---
title: "MediaStream: Methode getAudioTracks()"
short-title: getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getAudioTracks()`** Methode des {{domxref("MediaStream")}}-Interfaces gibt eine Sequenz zurück, die alle {{domxref("MediaStreamTrack")}}-Objekte in diesem [Track-Set](https://www.w3.org/TR/mediacapture-streams/#track-set) des Streams darstellt, bei denen {{domxref("MediaStreamTrack.kind")}} `audio` ist.

## Syntax

```js-nolint
getAudioTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("MediaStreamTrack")}}-Objekten, eines für jeden Audio-Track, der im Stream enthalten ist. Audio-Tracks sind diejenigen Tracks, deren {{domxref("MediaStreamTrack.kind", "kind")}}-Eigenschaft `audio` ist. Das Array ist leer, wenn der Stream keine Audio-Tracks enthält.

> [!NOTE]
> Die Reihenfolge der zurückgegebenen Tracks ist nicht durch die Spezifikation definiert und kann sich tatsächlich von einem Aufruf von `getAudioTracks()` zum nächsten ändern.

Frühere Versionen dieser API beinhalteten ein spezielles `AudioStreamTrack`-Interface, das als Typ für jeden Eintrag in der Liste der Audio-Streams verwendet wurde; dies wurde jedoch inzwischen in das Haupt-{{domxref("MediaStreamTrack")}}-Interface integriert.

## Beispiele

Dieses Beispiel holt Audio und Video einer Webcam in einem Stream mit {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, verbindet den Stream mit einem {{HTMLElement("video")}}-Element und stellt dann einen Timer ein, der nach Ablauf den ersten im Stream gefundenen Audio-Track stoppt.

```js
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // Stoppen Sie den Audiostream nach 5 Sekunden
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
