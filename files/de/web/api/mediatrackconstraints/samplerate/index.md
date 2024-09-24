---
title: "MediaTrackConstraints: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackConstraints/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleRate`** Attribut des {{domxref("MediaTrackConstraints")}}-Dictionaries ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.sampleRate", "sampleRate")}}-Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.sampleRate")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren werden.

## Wert

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Abtastrate so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Möglichkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten bei seinen Bemühungen führen, eine genaue Übereinstimmung mit der erforderlichen Abtastrate zu erzielen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder eine bestmögliche Annäherung zu erreichen.

## Beispiele

Siehe das [Constraint-Exerciser-Beispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
