---
title: "MediaTrackSupportedConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSupportedConstraints/logicalSurface
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Media Capture and Streams")}}

Das Wörterbuch [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints) enthält die **`logicalSurface`**-Eigenschaft, die angibt, ob die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung durch den User-Agent und das Gerät, auf dem der Inhalt verwendet wird, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufrufen von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) abgerufen.

### Wert

Ein boolescher Wert, der `true` ist, wenn die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung durch das Gerät und den User-Agent unterstützt wird.

## Beispiel

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von
[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) festlegt. Sie fügt die
`logicalSurface`-Einschränkung hinzu (fordert, dass nur logische Anzeigeflächen – solche, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar sind – in den dem Benutzer zur Verfügung stehenden Optionen enthalten sein sollen), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Die Erfassung wird dann gestartet, indem `getDisplayMedia()` aufgerufen und der zurückgegebene Stream an das durch die Variable `videoElem` referenzierte Videoelement angehängt wird.

```js
async function capture() {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    video: {},
    audio: false,
  };

  if (supportedConstraints.logicalSurface) {
    displayMediaOptions.video.logicalSurface = "monitor";
  }

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    /* handle the error */
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
