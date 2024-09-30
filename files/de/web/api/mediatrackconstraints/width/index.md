---
title: "MediaTrackConstraints: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackConstraints/width
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`width`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder obligatorischen Einschränkungen für den Wert des [`width`](/de/docs/Web/API/MediaTrackSettings/width)-Einschränkungsattributs beschreibt.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.width`](/de/docs/Web/API/MediaTrackSupportedConstraints/width) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren werden.

## Wert

Wenn dieser Wert eine Zahl ist, wird der User-Agent versuchen, Medien zu erhalten, deren Breite so nah wie möglich an dieser Zahl liegt, basierend auf den Fähigkeiten der Hardware und den anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den User-Agent in seinen Bemühungen leiten, eine exakte Übereinstimmung mit der benötigten Breite zu liefern (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert zu erreichen.

## Beispiele

Siehe das Beispiel [Constraint-Übersetzer](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
