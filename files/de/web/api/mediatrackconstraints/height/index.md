---
title: "MediaTrackConstraints: Eigenschaft height"
short-title: height
slug: Web/API/MediaTrackConstraints/height
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`height`** des Wörterbuchs [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder verbindlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`height`](/de/docs/Web/API/MediaStreamTrack/getSettings#height) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird: Rufen Sie dazu [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf und prüfen Sie den zurückgegebenen Wert von [`height`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#height). In der Regel ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ist dieser Wert eine Zahl, versucht der User Agent, unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen Medien mit einer Höhe zu erhalten, die dieser Zahl möglichst nahekommt. Andernfalls dient der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) dem User Agent als Vorgabe, um entweder die geforderte Höhe exakt zu erreichen (wenn `exact` angegeben ist oder `min` und `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert zu erzielen.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

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
