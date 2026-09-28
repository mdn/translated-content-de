---
title: "MediaTrackConstraints: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`sampleSize`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`sampleSize`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#samplesize) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien mit einer Sample-Größe (in Bits pro linearem Sample) zu erhalten, die dieser Zahl unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nahekommt. Andernfalls bestimmt der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Sample-Größe anstrebt (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

> [!NOTE]
> Da diese Eigenschaft nur lineare Sample-Größen darstellen kann, lässt sich diese Einschränkung nur mit Geräten erfüllen, die Audio mit linearen Samples erzeugen können.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
