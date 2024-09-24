---
title: "MediaTrackConstraints: Eigenschaft suppressLocalAudioPlayback"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.suppressLocalAudioPlayback","suppressLocalAudioPlayback")}}-Eigenschaft angewendet werden sollen. Diese Eigenschaft steuert, ob das Audio in einem Tab weiterhin über die Lautsprecher des Benutzers abgespielt wird, wenn der Tab aufgenommen wird.

Wenn erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der User-Agent versuchen, Medien mit aktiviertem oder deaktiviertem lokalen Audio-Playback wie angegeben zu erhalten, falls möglich, wird aber nicht fehlschlagen, wenn dies nicht möglich ist.

Wenn der Wert als `ideal` angegeben ist, gibt der boolesche Wert dieser Eigenschaft eine ideale Einstellung für die Unterdrückung des lokalen Audio-Playbacks an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

Das [Beispiel für Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie Media-Track-Einschränkungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
