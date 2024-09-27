---
title: "MediaTrackConstraints: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`aspectRatio`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder zwingenden Einschränkungen beschreibt, die auf den Wert der
[`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) einschränkbaren Eigenschaft gelegt werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die akzeptablen oder erforderlichen Werte für das
Video-Track-[Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beschreibt. Der Wert ist die Breite geteilt durch die Höhe und wird auf zehn Dezimalstellen gerundet. Zum Beispiel kann das Standard-Seitenverhältnis von hochauflösendem Video 16:9 als 1920/1080 oder 1.7777777778 berechnet werden.

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien mit einem Seitenverhältnis zu erhalten, das dieser Zahl so nahe wie möglich kommt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses
[`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den Benutzeragenten leiten, um ein genaues Übereinstimmen mit dem erforderlichen Seitenverhältnis zu erreichen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert.

## Beispiele

Siehe das Beispiel [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
