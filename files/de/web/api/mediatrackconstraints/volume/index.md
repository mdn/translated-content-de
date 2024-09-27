---
title: "MediaTrackConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die angeforderten oder zwingenden Beschränkungen beschreibt, die auf den Wert der [`volume`](/de/docs/Web/API/MediaTrackSettings/volume)-konfigurierbaren Eigenschaft angewendet werden.

Falls nötig, kann überprüft werden, ob diese Einschränkung unterstützt wird, indem der Wert von [`MediaTrackSupportedConstraints.volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) überprüft wird, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch unnötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das den akzeptablen oder erforderlichen Wert(e) für die Lautstärkeregelung eines Audiotracks beschreibt, auf einer linearen Skala, bei der 0,0 Stille bedeutet und 1,0 die höchste unterstützte Lautstärke ist.

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Lautstärke so nah wie möglich an dieser Zahl liegt, basierend auf den Fähigkeiten der Hardware und den anderen festgelegten Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den Benutzeragenten bei seinen Bemühungen leiten, eine exakte Übereinstimmung mit der erforderlichen Lautstärke (falls `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert zu liefern.

Jede Einschränkungsanforderung, die nur Werte außerhalb des Bereichs von 0,0 bis 1,0 zulässt, kann nicht erfüllt werden und führt zu einem Fehler.

## Beispiele

Siehe das [Beispiel zum Einschränkungsübungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
