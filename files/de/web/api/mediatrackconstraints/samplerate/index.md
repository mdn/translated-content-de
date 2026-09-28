---
title: "MediaTrackConstraints: Eigenschaft sampleRate"
short-title: sampleRate
slug: Web/API/MediaTrackConstraints/sampleRate
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`sampleRate`** des Wörterbuchs [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder verbindlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird: Prüfen Sie dazu den Wert von [`sampleRate`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#samplerate), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien mit einer Abtastrate zu erhalten, die unter Berücksichtigung der Hardwarefähigkeiten und der übrigen angegebenen Einschränkungen möglichst nahe an dieser Zahl liegt. Andernfalls bestimmt der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), ob der User Agent eine exakte Übereinstimmung mit der geforderten Abtastrate anstrebt (wenn `exact` angegeben ist oder `min` und `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

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
