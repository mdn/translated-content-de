---
title: "MediaTrackConstraints: Eigenschaft sampleRate"
short-title: sampleRate
slug: Web/API/MediaTrackConstraints/sampleRate
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`sampleRate`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`sampleRate`](/de/docs/Web/API/MediaStreamTrack/getSettings#samplerate) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`sampleRate`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#samplerate) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist dies jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien mit einer Abtastrate zu erhalten, die dieser Zahl unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nahekommt. Andernfalls gibt der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) vor, ob der User Agent eine genaue Übereinstimmung mit der erforderlichen Abtastrate anstrebt (wenn `exact` angegeben ist oder wenn sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert.

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
