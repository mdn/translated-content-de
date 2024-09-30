---
title: "MediaTrackConstraints: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackConstraints/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleRate`**-Eigenschaftswörterbuch von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der beschränkbaren Eigenschaft [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate) angewendet werden.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleRate) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der Benutzeragent, Medien zu erhalten, deren Abtastrate so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten bei seinen Bemühungen leiten, ein genaues Ergebnis für die erforderliche Abtastrate zu finden (wenn `exact` angegeben ist oder sowohl `min` als auch `max` denselben Wert haben) oder einen bestmöglichen Wert zu erreichen.

## Beispiele

Siehe das [Constraint-Beispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
