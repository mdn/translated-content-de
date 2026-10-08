---
title: "MediaTrackConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}{{Non-standard_Header}}

Die Eigenschaft **`volume`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder zwingend erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`volume`](/de/docs/Web/API/MediaStreamTrack/getSettings#volume) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`volume`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#volume) untersuchen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die zulässigen oder erforderlichen Werte für die Lautstärke einer Audiospur beschreibt. Die lineare Skala reicht von 0.0 für Stille bis 1.0 für die höchste unterstützte Lautstärke.

Wenn dieser Wert eine Zahl ist, versucht der User Agent, unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen Medien mit einer Lautstärke zu erhalten, die möglichst nahe an dieser Zahl liegt. Andernfalls bestimmt der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Lautstärke anstrebt (wenn `exact` angegeben ist oder wenn `min` und `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

Ein Satz von Einschränkungen, der ausschließlich Werte außerhalb des Bereichs von 0.0 bis 1.0 zulässt, kann nicht erfüllt werden und führt zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
