---
title: "MediaTrackConstraints: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleSize`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der beschränkbaren Eigenschaft [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize) angewendet werden.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleSize`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleSize) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Sample-Größe (in Bits pro linearem Sample) so nahe wie möglich an dieser Zahl liegt, gegeben die Fähigkeiten der Hardware und die anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten dabei unterstützen, eine exakte Übereinstimmung mit der erforderlichen Sample-Größe bereitzustellen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert.

> [!NOTE]
> Da diese Eigenschaft nur lineare Sample-Größen darstellen kann, kann diese Einschränkung nur von Geräten erfüllt werden, die Audio mit linearen Samples erzeugen können.

## Beispiele

Siehe das [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) Beispiel.

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
