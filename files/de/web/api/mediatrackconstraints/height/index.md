---
title: "MediaTrackConstraints: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackConstraints/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`height`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`height`](/de/docs/Web/API/MediaTrackSettings/height)-Einschränkungs-Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.height`](/de/docs/Web/API/MediaTrackSupportedConstraints/height) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch normalerweise nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, wird der User Agent versuchen, Medien zu erhalten, deren Höhe so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den User Agenten bei seinen Bemühungen leiten, eine genaue Übereinstimmung mit der erforderlichen Höhe zu erzielen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert bereitzustellen.

## Beispiele

Siehe das Beispiel im [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
