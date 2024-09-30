---
title: "MediaTrackSupportedConstraints: suppressLocalAudioPlayback-Eigenschaft"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs zeigt an, ob die [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)-Einschränkung durch den User-Agent und das Gerät, auf dem der Inhalt verwendet wird, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch den Aufruf von [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) abgerufen.

## Wert

Ein boolescher Wert, der `true` ist, wenn die [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)-Einschränkung vom Gerät und User-Agent unterstützt wird.

## Beispiele

Die folgende Funktion richtet das Optionsobjekt für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ein. Sie fügt die `suppressLocalAudioPlayback`-Einschränkung hinzu (in der Anfrage, dass aufgenommener Ton nicht über die lokalen Lautsprecher des Benutzers wiedergegeben wird), nur wenn bekannt ist, dass diese vom Browser unterstützt wird. Die Aufnahme wird dann gestartet, indem `getDisplayMedia()` aufgerufen und der zurückgegebene Stream an das Videoelement gebunden wird, auf das die Variable `videoElem` verweist.

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
