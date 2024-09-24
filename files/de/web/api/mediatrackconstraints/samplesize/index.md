---
title: "MediaTrackConstraints: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleSize`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Dictionaries ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.sampleSize", "sampleSize")}}-beschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie überprüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.sampleSize")}} prüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, wird der User-Agent versuchen, Medien zu erhalten, deren Samplegröße (in Bits pro linearem Sample) so nahe wie möglich an dieser Zahl liegt, basierend auf den Fähigkeiten der Hardware und den anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den User-Agent bei seinen Bemühungen leiten, eine genaue Übereinstimmung mit der erforderlichen Samplegröße zu erzielen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert.

> [!NOTE]
> Da diese Eigenschaft nur lineare Samplegrößen darstellen kann, kann diese Einschränkung nur von Geräten erfüllt werden, die Audio mit linearen Samples produzieren können.

## Beispiele

Sehen Sie sich das [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
