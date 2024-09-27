---
title: "MediaTrackSupportedConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSupportedConstraints/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs gibt an, ob die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung vom Benutzeragenten und dem Gerät, auf dem der Inhalt verwendet wird, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufrufen von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) abgerufen.

## Syntax

```js-nolint
isLogicalSurfaceSupported = supportedConstraints.logicalSurface
```

### Wert

Ein booleanischer Wert, der `true` ist, wenn die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung vom Gerät und Benutzeragenten unterstützt wird.

## Beispiel

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) spezifiziert. Sie fügt die `logicalSurface`-Einschränkung hinzu (fordert an, dass nur logische Anzeigeflächen—solche, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar sind—unter den dem Benutzer verfügbaren Optionen enthalten sind), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Erfassen wird dann durch Aufruf von `getDisplayMedia()` gestartet, und der zurückgegebene Stream wird an das durch die Variable `videoElem` referenzierte Videoelement angehängt.

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
