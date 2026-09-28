---
title: "MediaTrackConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackConstraints/frameRate
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`frameRate`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird. Prüfen Sie dazu den Wert von [`frameRate`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#framerate), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die zulässigen oder erforderlichen Werte für die Bildrate eines Videotracks in Bildern pro Sekunde beschreibt.

Wenn dieser Wert eine Zahl ist, versucht der User Agent, unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen Medien mit einer Bildrate zu erhalten, die dieser Zahl möglichst nahekommt. Andernfalls bestimmt der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Bildrate anstrebt (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

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
