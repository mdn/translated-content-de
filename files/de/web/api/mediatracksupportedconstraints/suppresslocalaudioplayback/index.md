---
title: "MediaTrackSupportedConstraints: suppressLocalAudioPlayback-Eigenschaft"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs gibt an, ob die [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)-Einschränkung vom Benutzeragent und dem Gerät, auf dem der Inhalt verwendet wird, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird abgerufen, indem [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufgerufen wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn die [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)-Einschränkung vom Gerät und Benutzeragent unterstützt wird.

## Beispiele

Die folgende Funktion richtet das Optionsobjekt für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ein. Sie fügt die `suppressLocalAudioPlayback`-Einschränkung hinzu (wobei angefordert wird, dass aufgenommenes Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Aufzeichnen wird dann gestartet, indem `getDisplayMedia()` aufgerufen und der zurückgegebene Stream dem Videoelement zugewiesen wird, auf das durch die Variable `videoElem` verwiesen wird.

```js
async function capture() {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    audio: {},
  };

  if (supportedConstraints.suppressLocalAudioPlayback) {
    displayMediaOptions.audio.suppressLocalAudioPlayback = true;
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
