---
title: "MediaTrackConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackConstraints/frameRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`frameRate`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)-einschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.frameRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/frameRate) prüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht nötig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der den akzeptablen oder erforderlichen Wert(e) für die Bildrate eines Videotracks in Bildern pro Sekunde beschreibt.

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Bildrate so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den Benutzeragenten bei dem Bestreben anleiten, eine genaue Übereinstimmung mit der erforderlichen Bildrate zu bieten (wenn `exact` angegeben ist oder sowohl `min` als auch `max` den gleichen Wert haben) oder einen bestmöglichen Wert zu erreichen.

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
