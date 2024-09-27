---
title: "MediaTrackConstraints: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackConstraints/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleRate`**-Eigenschaftswörterbuch von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong),
das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der
[`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate) beschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleRate) überprüfen, wie er durch einen
Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Typischerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu erhalten, deren Abtastrate so nah wie möglich an dieser Zahl liegt, basierend auf den Fähigkeiten der Hardware und den anderen festgelegten Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten in seinen Bemühungen leiten, eine genaue Übereinstimmung mit der erforderlichen Abtastrate bereitzustellen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben und auf denselben Wert gesetzt sind) oder einen bestmöglichen Wert zu erreichen.

## Beispiele

Siehe das Beispiel für den [Constraint-Übungsbereich](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
