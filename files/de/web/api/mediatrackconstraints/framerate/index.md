---
title: "MediaTrackConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackConstraints/frameRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`frameRate`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate) einschränkbaren Eigenschaft angewendet werden.

Falls nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.frameRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/frameRate) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die akzeptablen oder erforderlichen Werte für die Bildrate eines Videostreams in Bildern pro Sekunde beschreibt.

Wenn dieser Wert eine Zahl ist, versucht der Benutzeragent, Medien mit einer Bildrate bereitzustellen, die angesichts der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen so nah wie möglich an dieser Zahl liegt. Andernfalls leitet der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den Benutzeragenten in seinen Bemühungen, eine genaue Übereinstimmung mit der geforderten Bildrate zu erreichen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt und gleich sind) oder einen bestmöglichen Wert bereitzustellen.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
