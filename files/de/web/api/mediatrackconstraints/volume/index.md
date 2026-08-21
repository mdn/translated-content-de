---
title: "MediaTrackConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Media Capture and Streams")}}{{Non-standard_Header}}

Das **`volume`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder erforderlichen Einschränkungen beschreibt, die auf den Wert der [`volume`](/de/docs/Web/API/MediaTrackSettings/volume)-einschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht nötig, da Browser alle Einschränkungen ignorieren, mit denen sie nicht vertraut sind.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das den akzeptablen oder erforderlichen Wert bzw. die Werte für die Lautstärke eines Audio-Tracks beschreibt, auf einer linearen Skala, bei der 0.0 Stille bedeutet und 1.0 die höchste unterstützte Lautstärke ist.

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Lautstärke so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Hardwarefähigkeiten und der anderen spezifizierten Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den Benutzeragenten anleiten, seine Bestrebungen entweder an eine genaue Übereinstimmung mit der erforderlichen Lautstärke zu richten (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen möglichst guten Wert zu bieten.

Jeder Einschränkungssatz, der nur Werte außerhalb des Bereichs von 0.0 bis 1.0 zulässt, kann nicht erfüllt werden und führt zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
