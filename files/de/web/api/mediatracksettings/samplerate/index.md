---
title: "MediaTrackSettings: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackSettings/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`sampleRate`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Ganzzahl, die angibt, wie viele Audiodatenproben pro Sekunde der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Beschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)-Eigenschaft beschrieben, die Sie beim Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleRate) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Eine Ganzzahl, die angibt, wie viele Proben jede Sekunde der Audiodaten umfasst. Gängige Werte sind 44.100 (Standard-CD-Audio), 48.000 (Standard-Digitalaudio), 96.000 (häufig in der Audio-Mastering und Nachproduktion verwendet) und 192.000 (für hochauflösendes Audio bei professionellen Aufnahme- und Mastering-Sitzungen verwendet). Niedrigere Werte werden jedoch häufig verwendet, um die Bandbreitenanforderungen zu reduzieren; 8.000 Proben pro Sekunde sind für verständliche, wenn auch unvollkommene, menschliche Sprache ausreichend, und sowohl 11.025 FPS als auch 22.050 FPS werden häufig für geringere Bandbreite und reduzierte Klang- und Musikqualität verwendet.

## Beispiele

Siehe das [Beispiele für Einschränkungsübung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Beschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
