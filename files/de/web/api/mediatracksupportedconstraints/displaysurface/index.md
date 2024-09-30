---
title: "MediaTrackSupportedConstraints: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackSupportedConstraints/displaySurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`displaySurface`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs gibt an, ob die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung durch den Benutzeragenten und das Gerät, auf dem die Inhalte genutzt werden, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch den Aufruf von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) erhalten.

## Wert

Ein boolescher Wert, der `true` ist, wenn die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung durch das Gerät und den Benutzeragenten unterstützt wird.

## Beispiele

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) angibt. Sie fügt die `displaySurface`-Einschränkung hinzu (wobei beantragt wird, dass nur das Teilen des Vollbildes erlaubt ist), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Die Aufnahme wird dann durch den Aufruf von `getDisplayMedia()` gestartet und der zurückgegebene Stream an das `<video>`-Element angehängt, das durch die Variable `videoElem` referenziert wird.

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
