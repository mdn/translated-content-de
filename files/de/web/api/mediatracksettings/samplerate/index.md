---
title: "MediaTrackSettings: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackSettings/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleRate`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Ganzzahl, die angibt, wie viele Audiosamples pro Sekunde der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dadurch können Sie bestimmen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)-Eigenschaft beschrieben, die Sie angegeben haben, als Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleRate) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch unnötig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele Samples jede Sekunde der Audiodaten enthält. Gängige Werte sind 44.100 (Standard-CD-Audio), 48.000 (Standard-Digitalaudio), 96.000 (häufig in der Audiobearbeitung und Postproduktion verwendet) und 192.000 (für hochauflösendes Audio in professionellen Aufnahme- und Mastering-Sessions verwendet). Niedrigere Werte werden jedoch häufig verwendet, um den Bandbreitenbedarf zu reduzieren; 8.000 Samples pro Sekunde sind ausreichend für verständliche, wenn auch unvollkommene menschliche Sprache, und sowohl 11.025 FPS als auch 22.050 FPS werden häufig für Sound und Musik mit niedriger Bandbreite und reduzierter Qualität verwendet.

## Beispiele

Siehe das [Einschränkungs-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
