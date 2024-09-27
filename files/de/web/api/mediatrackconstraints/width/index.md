---
title: "MediaTrackConstraints: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackConstraints/width
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`width`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder zwingend erforderlichen Einschränkungen beschreibt, die auf den Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width) beschränkbaren Eigenschaft angewendet werden.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.width`](/de/docs/Web/API/MediaTrackSupportedConstraints/width) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu beziehen, deren Breite so nah wie möglich an dieser Zahl liegt, gegebenen die Fähigkeiten der Hardware und die anderen spezifizierten Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten bei seinen Bemühungen leiten, eine genaue Übereinstimmung mit der geforderten Breite zu liefern (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert zu erreichen.

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
