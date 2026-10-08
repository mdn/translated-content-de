---
title: "MediaTrackConstraints: Eigenschaft sampleSize"
short-title: sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`sampleSize`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`sampleSize`](/de/docs/Web/API/MediaStreamTrack/getSettings#samplesize) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`sampleSize`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#samplesize) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien zu erhalten, deren Sample-Größe (in Bits pro linearem Sample) dieser Zahl möglichst nahekommt. Dabei berücksichtigt er die Fähigkeiten der Hardware und die anderen angegebenen Einschränkungen. Andernfalls dient der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) dem User Agent als Vorgabe, um die erforderliche Sample-Größe exakt zu erreichen (wenn `exact` angegeben ist oder `min` und `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert bereitzustellen.

> [!NOTE]
> Da diese Eigenschaft nur lineare Sample-Größen darstellen kann, lässt sich diese Einschränkung nur mit Geräten erfüllen, die Audio mit linearen Samples erzeugen können.

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
