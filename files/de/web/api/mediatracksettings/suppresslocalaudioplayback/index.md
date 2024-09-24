---
title: "MediaTrackSettings: Eigenschaft suppressLocalAudioPlayback"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackSettings/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher eines Nutzers ausgegeben wird, wenn der Tab erfasst wird.

Zum Beispiel, wenn Sie einen Videoanruf an ein externes AV-System in einem Konferenzraum übertragen, möchten Sie, dass das Audio über das AV-System und nicht über die lokalen Lautsprecher abgespielt wird. Auf diese Weise wird das Audio lauter und klarer und ist auch mit dem Konferenzvideo synchron.

## Wert

Der Wert von `suppressLocalAudioPlayback` ist ein Boolean – `true` aktiviert die Unterdrückung der lokalen Audiowiedergabe, und `false` deaktiviert sie.

## Beispiele

Die folgende Funktion richtet das Constraints-Objekt ein, das die Optionen für den Aufruf von {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} angibt. Sie fügt die Bedingung `suppressLocalAudioPlayback` hinzu (um zu verlangen, dass erfasstes Audio nicht über die lokalen Lautsprecher des Nutzers abgespielt wird), nur wenn bekannt ist, dass sie vom Browser unterstützt wird. Das Aufzeichnen wird dann durch den Aufruf von `getDisplayMedia()` gestartet und der zurückgegebene Stream wird dem über die Variable `videoElem` referenzierten Videoelement zugewiesen.

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
