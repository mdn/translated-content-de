---
title: "MediaTrackSettings: channelCount-Eigenschaft"
short-title: channelCount
slug: Web/API/MediaTrackSettings/channelCount
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`channelCount`** des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionaries ist eine Ganzzahl, die angibt, für wie viele Audiokanäle der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. So können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen festgelegten Constraints für diese Eigenschaft zu erfüllen. Diese Constraints haben Sie über die Eigenschaft [`MediaTrackConstraints.channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`channelCount`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#channelcount) aus einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) prüfen. In der Regel ist das jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

## Wert

Eine Ganzzahl, die die Anzahl der Audiokanäle des Tracks angibt. Der Wert 1 steht für Mono, 2 für Stereo und so weiter.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
