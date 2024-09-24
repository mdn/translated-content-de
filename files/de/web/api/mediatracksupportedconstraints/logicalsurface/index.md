---
title: "MediaTrackSupportedConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSupportedConstraints/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs gibt an, ob die {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}-Einschränkung vom Benutzeragenten und dem Gerät, auf dem der Inhalt verwendet wird, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufrufen von {{domxref("MediaDevices.getSupportedConstraints","navigator.mediaDevices.getSupportedConstraints()")}} abgerufen.

## Syntax

```js-nolint
isLogicalSurfaceSupported = supportedConstraints.logicalSurface
```

### Wert

Ein boolescher Wert, der `true` ist, wenn die {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}-Einschränkung vom Gerät und Benutzeragenten unterstützt wird.

## Beispiel

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} spezifiziert. Es fügt die `logicalSurface`-Einschränkung hinzu (die anfordert, dass nur logische Anzeigeflächen—die möglicherweise nicht vollständig auf dem Bildschirm sichtbar sind—unter den dem Benutzer zur Verfügung stehenden Optionen enthalten sind), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Die Erfassung wird dann durch Aufrufen von `getDisplayMedia()` gestartet und der zurückgegebene Stream wird an das Videoelement gebunden, das durch die Variable `videoElem` referenziert wird.

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
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
