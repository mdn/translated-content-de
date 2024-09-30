---
title: "MediaTrackSettings: suppressLocalAudioPlayback Eigenschaft"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSettings/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs steuert, ob das Audio in einem Tab weiterhin über die lokalen Lautsprecher eines Benutzers abgespielt wird, wenn der Tab erfasst wird.

Zum Beispiel, wenn Sie ein Videogespräch an ein externes AV-System in einem Konferenzraum übertragen, möchten Sie, dass das Audio über das AV-System abgespielt wird und nicht über die lokalen Lautsprecher. Auf diese Weise wird das Audio lauter und klarer und auch synchron mit dem Konferenzvideo.

## Wert

Der Wert von `suppressLocalAudioPlayback` ist ein boolean — `true` aktiviert die Unterdrückung der lokalen Audiowiedergabe, und `false` deaktiviert sie.

## Beispiele

Die untenstehende Funktion erstellt das Constraints-Objekt, das die Optionen für den Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) spezifiziert. Sie fügt die `suppressLocalAudioPlayback`-Einschränkung hinzu (wodurch angefordert wird, dass das erfasste Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Erfassen wird dann durch den Aufruf von `getDisplayMedia()` gestartet und der zurückgegebene Stream wird dem Video-Element zugeordnet, auf das die Variable `videoElem` verweist.

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
- [Die Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
