---
title: "MediaTrackSupportedConstraints: Eigenschaft displaySurface"
short-title: displaySurface
slug: Web/API/MediaTrackSupportedConstraints/displaySurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`displaySurface`**-Eigenschaft des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs zeigt an, ob die {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}-Einschränkung vom Benutzeragent und dem Gerät, auf dem die Inhalte verwendet werden, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufrufen von {{domxref("MediaDevices.getSupportedConstraints","navigator.mediaDevices.getSupportedConstraints()")}} abgerufen.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}-Einschränkung vom Gerät und Benutzeragent unterstützt wird.

## Beispiele

Diese Methode erstellt das Einschränkungsobjekt, das die Optionen für den Aufruf von {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} spezifiziert. Sie fügt die `displaySurface`-Einschränkung hinzu (um zu fordern, dass nur das Teilen des Vollbildes erlaubt ist), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Erfassen wird dann durch Aufrufen von `getDisplayMedia()` gestartet, und der zurückgegebene Stream wird an das Videoelement angehängt, das durch die Variable `videoElem` referenziert wird.

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
- [Verwendung der Screen-Capture-API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
