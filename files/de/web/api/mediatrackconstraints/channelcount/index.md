---
title: "MediaTrackConstraints: Eigenschaft channelCount"
short-title: channelCount
slug: Web/API/MediaTrackConstraints/channelCount
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`channelCount`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), der die gewünschten oder verbindlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`channelCount`](/de/docs/Web/API/MediaStreamTrack/getSettings#channelcount) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird. Überprüfen Sie dazu den Wert von [`channelCount`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#channelcount), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien zu beziehen, deren Kanalanzahl dieser Zahl möglichst nahekommt. Dabei berücksichtigt er die Fähigkeiten der Hardware und die anderen angegebenen Einschränkungen. Andernfalls bestimmt der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Kanalanzahl anstrebt (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

Die Kanalanzahl beträgt 1 für Mono, 2 für Stereo und so weiter.

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
