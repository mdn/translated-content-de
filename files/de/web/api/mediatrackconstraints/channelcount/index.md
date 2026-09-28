---
title: "MediaTrackConstraints: Eigenschaft channelCount"
short-title: channelCount
slug: Web/API/MediaTrackConstraints/channelCount
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`channelCount`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die gewünschten oder zwingend erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird: Überprüfen Sie dazu den Wert von [`channelCount`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#channelcount), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien zu erhalten, deren Kanalanzahl unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen möglichst nahe an dieser Zahl liegt. Andernfalls bestimmt der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), ob der User Agent eine exakte Übereinstimmung mit der erforderlichen Kanalanzahl anstrebt (wenn `exact` angegeben ist oder sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert.

Die Kanalanzahl beträgt 1 für Mono-Ton, 2 für Stereo und so weiter.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
