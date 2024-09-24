---
title: "MediaTrackSupportedConstraints: Eigenschaft suppressLocalAudioPlayback"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuchs zeigt an, ob die {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}}-Einschränkung vom Benutzeragenten und dem Gerät, auf dem die Inhalte verwendet werden, unterstützt wird.

Die Liste der unterstützten Einschränkungen wird durch Aufrufen von {{domxref("MediaDevices.getSupportedConstraints","navigator.mediaDevices.getSupportedConstraints()")}} erhalten.

## Wert

Ein boolescher Wert, der `true` ist, wenn die {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}}-Einschränkung vom Gerät und Benutzeragenten unterstützt wird.

## Beispiele

Die folgende Funktion richtet das Optionsobjekt für den Aufruf von {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} ein. Sie fügt die `suppressLocalAudioPlayback`-Einschränkung hinzu (was fordert, dass aufgenommenes Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Die Aufnahme wird dann durch den Aufruf von `getDisplayMedia()` gestartet und der zurückgegebene Stream wird dem Videoelement zugewiesen, auf das die Variable `videoElem` verweist.

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
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
