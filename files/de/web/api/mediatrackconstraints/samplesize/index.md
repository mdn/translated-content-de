---
title: "MediaTrackConstraints: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`sampleSize`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)-einstellbaren Eigenschaft angewendet werden.

Falls notwendig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleSize`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleSize) überprüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle Einschränkungen ignorieren, mit denen sie nicht vertraut sind.

## Wert

Wenn dieser Wert eine Zahl ist, wird der User Agent versuchen, Medien zu erhalten, deren Sample-Größe (in Bits pro linearem Sample) so nah wie möglich an dieser Zahl liegt, angesichts der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den User Agent bei dem Bemühen leiten, eine exakte Übereinstimmung mit der geforderten Sample-Größe (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und den gleichen Wert haben) oder einen bestmöglichen Wert zu liefern.

> [!NOTE]
> Da diese Eigenschaft nur lineare Sample-Größen repräsentieren kann, kann diese Einschränkung nur von Geräten erfüllt werden, die Audio mit linearen Samples erzeugen können.

## Beispiele

Siehe das [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
