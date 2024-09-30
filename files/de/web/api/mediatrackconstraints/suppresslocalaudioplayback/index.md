---
title: "MediaTrackConstraints: suppressLocalAudioPlayback-Eigenschaft"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`suppressLocalAudioPlayback`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die angeforderten oder obligatorischen Beschränkungen für den Wert der [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)-Einschränkbaren Eigenschaft beschreibt. Diese Eigenschaft steuert, ob die Audioausgabe in einem Tab weiterhin über die lokalen Lautsprecher eines Nutzers wiedergegeben wird, wenn der Tab erfasst wird.

Falls erforderlich, können Sie bestimmen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der User-Agent versuchen, Medien mit aktivierter oder deaktivierter lokaler Audiowiedergabe wie angegeben zu erhalten, falls möglich. Er wird jedoch nicht fehlschlagen, wenn dies nicht realisierbar ist.

Wenn der Wert als `ideal` angegeben ist, zeigt der boolesche Wert dieses Feldes eine ideale Einstellung für die Unterdrückung der lokalen Audiowiedergabe an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

Das [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie man Mediensporeneinschränkungen verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints und settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
