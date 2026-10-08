---
title: "MediaTrackConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackConstraints/frameRate
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`frameRate`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder zwingend einzuhaltenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`frameRate`](/de/docs/Web/API/MediaStreamTrack/getSettings#framerate) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`frameRate`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#framerate) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die zulässigen oder erforderlichen Werte für die Bildrate eines Videotracks in Bildern pro Sekunde beschreibt.

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien mit einer Bildrate zu erhalten, die dieser Zahl unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nahekommt. Andernfalls gibt der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) vor, ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Bildrate anstreben soll (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

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
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
