---
title: "MediaTrackConstraints: Eigenschaft channelCount"
short-title: channelCount
slug: Web/API/MediaTrackConstraints/channelCount
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`channelCount`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)-konfigurierbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.channelCount`](/de/docs/Web/API/MediaTrackSupportedConstraints/channelCount) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Kanäle so nah wie möglich an dieser Zahl liegen, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten bei dem Bemühen leiten, eine genaue Übereinstimmung mit der erforderlichen Kanalanzahl (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert zu liefern.

Die Kanalanzahl beträgt 1 für monauralen Ton, 2 für Stereo und so weiter.

## Beispiele

Siehe das Beispiel [Constraint-Übung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
