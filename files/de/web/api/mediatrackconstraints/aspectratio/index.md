---
title: "MediaTrackConstraints: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`aspectRatio`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der
[`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) beschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren werden.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die akzeptablen oder erforderlichen Werte für das [Bildseitenverhältnis](/de/docs/Glossary/aspect_ratio) einer Videospur beschreibt. Der Wert wird als Breite geteilt durch Höhe berechnet und auf zehn Dezimalstellen gerundet. Zum Beispiel kann das Standard-Bildseitenverhältnis für hochauflösendes Video von 16:9 als 1920/1080 oder 1.7777777778 berechnet werden.

Wenn dieser Wert eine Zahl ist, wird der User-Agent versuchen, Medien zu erhalten, deren Bildseitenverhältnis so nah wie möglich an dieser Zahl liegt, abhängig von den Fähigkeiten der Hardware und den anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User-Agent bei seinen Bemühungen leiten, eine genaue Übereinstimmung mit dem erforderlichen Bildseitenverhältnis zu bieten (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und den gleichen Wert haben) oder einen bestmöglichen Wert.

## Beispiele

Siehe das Beispiel des [Constraint-Übungstools](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
