---
title: "MediaTrackConstraints: Eigenschaft width"
short-title: width
slug: Web/API/MediaTrackConstraints/width
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`width`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`width`](/de/docs/Web/API/MediaTrackSettings/width) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`width`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#width) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien zu erhalten, deren Breite unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nahe an dieser Zahl liegt. Andernfalls bestimmt der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Breite anstrebt (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen bestmöglichen Wert.

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
