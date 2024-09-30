---
title: "MediaTrackSupportedConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSupportedConstraints/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs zeigt an, ob die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung durch den Benutzeragenten und das Gerät, auf dem die Inhalte verwendet werden, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch den Aufruf von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) abgerufen.

## Syntax

```js-nolint
isLogicalSurfaceSupported = supportedConstraints.logicalSurface
```

### Wert

Ein boolescher Wert, der `true` ist, wenn die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung durch das Gerät und den Benutzeragenten unterstützt wird.

## Beispiel

Diese Methode richtet das Einschränkungsobjekt ein, das die Optionen für den Aufruf von
[`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) angibt. Sie fügt die
`logicalSurface`-Einschränkung hinzu (mit der Anfrage, dass nur logische Anzeigeoberflächen — die möglicherweise nicht vollständig auf dem Bildschirm sichtbar sind — zu den dem Benutzer verfügbaren Optionen gehören), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Die Erfassung wird dann durch den Aufruf von `getDisplayMedia()` gestartet, und der zurückgegebene Stream wird dem `videoElem`-Element zugewiesen.

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
