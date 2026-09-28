---
title: "MediaTrackConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder zwingend erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`volume`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#volume) untersuchen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die zulässigen oder erforderlichen Werte für die Lautstärke einer Audiospur beschreibt. Die Lautstärke wird auf einer linearen Skala angegeben, auf der 0.0 Stille und 1.0 die höchste unterstützte Lautstärke bedeutet.

Wenn dieser Wert eine Zahl ist, versucht der User Agent, unter Berücksichtigung der Hardwarefunktionen und der anderen angegebenen Einschränkungen Medien mit einer Lautstärke zu erhalten, die dieser Zahl möglichst nahekommt. Andernfalls bestimmt der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), ob der User Agent die erforderliche Lautstärke exakt erreichen muss (wenn `exact` angegeben ist oder `min` und `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert bereitstellen soll.

Eine Menge von Einschränkungen, die ausschließlich Werte außerhalb des Bereichs von 0.0 bis 1.0 zulässt, kann nicht erfüllt werden und führt zu einem Fehler.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Funktionen, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
