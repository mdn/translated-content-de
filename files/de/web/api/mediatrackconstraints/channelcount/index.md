---
title: "MediaTrackConstraints: channelCount-Eigenschaft"
short-title: channelCount
slug: Web/API/MediaTrackConstraints/channelCount
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`channelCount`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)-Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.channelCount`](/de/docs/Web/API/MediaTrackSupportedConstraints/channelCount) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen nicht bekannt sind.

## Wert

Wenn dieser Wert eine Zahl ist, wird der User Agent versuchen, Medien zu erhalten, deren Kanalanzahl so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den User Agent dabei leiten, eine genaue Übereinstimmung mit der erforderlichen Kanalanzahl zu erzielen (falls `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert bereitzustellen.

Die Kanalanzahl ist 1 für Mono-Sound, 2 für Stereo und so weiter.

## Beispiele

Siehe das Beispiel [Constraint-Übende](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
