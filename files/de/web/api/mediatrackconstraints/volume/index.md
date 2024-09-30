---
title: "MediaTrackConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`volume`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder zwingend erforderlichen Einschränkungen beschreibt, die auf den Wert der [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) einschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das den akzeptablen oder erforderlichen Wert für die Lautstärke einer Audio-Spur beschreibt, auf einer linearen Skala, bei der 0.0 Stille bedeutet und 1.0 die höchste unterstützte Lautstärke ist.

Wenn dieser Wert eine Zahl ist, wird die Benutzerumgebung versuchen, Medien zu erhalten, deren Lautstärke unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nah an dieser Zahl liegt. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) die Benutzerumgebung bei ihren Bemühungen leiten, eine genaue Übereinstimmung mit der erforderlichen Lautstärke zu liefern (falls `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert.

Jedes Einschränkungsset, das nur Werte außerhalb des Bereichs von 0.0 bis 1.0 erlaubt, kann nicht erfüllt werden und führt zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
