---
title: "MediaTrackSupportedConstraints: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackSupportedConstraints/displaySurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`displaySurface`**-Eigenschaft im [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuch gibt an, ob die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung vom Benutzeragenten und dem Gerät, auf dem die Inhalte verwendet werden, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufruf von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) abgerufen.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung vom Gerät und Benutzeragenten unterstützt wird.

## Beispiele

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) angibt. Es fügt die `displaySurface`-Einschränkung hinzu (wobei nur die Bildschirmfreigabe im Vollbildmodus erlaubt sein soll), jedoch nur, wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Erfassen wird dann durch Aufruf von `getDisplayMedia()` gestartet und der zurückgegebene Stream wird dem `<video>`-Element zugeordnet, auf das durch die Variable `videoElem` verwiesen wird.

```js
async function capture() {
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  let displayMediaOptions = {
    video: {},
    audio: false,
  };

  if (supportedConstraints.displaySurface) {
    displayMediaOptions.video.displaySurface = "monitor";
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
