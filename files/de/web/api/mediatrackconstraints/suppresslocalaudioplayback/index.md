---
title: "MediaTrackConstraints: Eigenschaft suppressLocalAudioPlayback"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der unterdrückbaren Eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) angewendet werden. Diese Eigenschaft steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin aus den lokalen Lautsprechern eines Nutzers abgespielt wird, wenn der Tab erfasst wird.

Falls erforderlich, können Sie durch Überprüfung des Wertes von [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback), der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird, bestimmen, ob diese Einschränkung unterstützt wird. Normalerweise ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der User-Agent versuchen, Medien mit aktivierter oder deaktivierter lokaler Audiowiedergabe wie angegeben zu erhalten, soweit dies möglich ist, aber er wird nicht fehlschlagen, wenn dies nicht gemacht werden kann.

Wenn der Wert als `ideal` angegeben ist, gibt der boolesche Wert dieses Feldes eine ideale Einstellung für die Unterdrückung der lokalen Audiowiedergabe an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

Das Beispiel des [Constraint-Übungsprogramms](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie Medientrack-Einschränkungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
