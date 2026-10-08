---
title: "MediaTrackConstraints: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackConstraints/width
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die **`width`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`width`](/de/docs/Web/API/MediaStreamTrack/getSettings#width) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`width`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#width) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien mit einer Breite zu beziehen, die dieser Zahl unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nahekommt. Andernfalls dient der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) dem User Agent als Vorgabe, um die erforderliche Breite exakt zu erreichen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert bereitzustellen.

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
