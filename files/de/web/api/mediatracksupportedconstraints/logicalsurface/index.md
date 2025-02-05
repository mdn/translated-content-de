---
title: "MediaTrackSupportedConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSupportedConstraints/logicalSurface
l10n:
  sourceCommit: 5e3c69527de87e8ff9407de62e919db9254f0627
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs zeigt an, ob die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung vom Benutzeragenten und dem Gerät, auf dem der Inhalt verwendet wird, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufruf von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) abgerufen.

## Wert

Ein boolescher Wert, der `true` ist, wenn die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung vom Gerät und dem Benutzeragenten unterstützt wird.

## Beispiel

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) angibt. Sie fügt die `logicalSurface`-Einschränkung (die anfordert, dass nur logische Anzeigeoberflächen—die möglicherweise nicht vollständig sichtbar auf dem Bildschirm sind – in die vom Benutzer verfügbaren Optionen aufgenommen werden) nur hinzu, wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Erfassen wird dann durch den Aufruf von `getDisplayMedia()` gestartet, und der zugehörige Stream wird an das durch die Variable `videoElem` referenzierte Videoelement angehängt.

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
