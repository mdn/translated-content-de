---
title: "MediaTrackSettings: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackSettings/sampleRate
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`sampleRate`** des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Ganzzahl, die angibt, auf wie viele Audio-Samples pro Sekunde der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen festgelegten Constraints für diese Eigenschaft zu erfüllen. Diese Constraints haben Sie über die Eigenschaft [`MediaTrackConstraints.sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate) angegeben, als Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`sampleRate`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#samplerate) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht erforderlich, da Browser unbekannte Constraints ignorieren.

## Wert

Eine Ganzzahl, die angibt, wie viele Samples eine Sekunde Audiodaten enthält. Gängige Werte sind 44.100 (Standard-CD-Audio), 48.000 (standardmäßiges digitales Audio), 96.000 (häufig beim Audio-Mastering und in der Postproduktion verwendet) und 192.000 (für hochauflösendes Audio bei professionellen Aufnahme- und Mastering-Sitzungen verwendet). Niedrigere Werte werden jedoch häufig genutzt, um den Bandbreitenbedarf zu verringern: 8.000 Samples pro Sekunde reichen für verständliche, wenn auch nicht perfekte menschliche Sprache aus. Sowohl 11.025 FPS als auch 22.050 FPS werden häufig für Ton und Musik mit geringer Bandbreite und reduzierter Qualität verwendet.

## Beispiele

Sehen Sie sich das Beispiel zum [Testen von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
