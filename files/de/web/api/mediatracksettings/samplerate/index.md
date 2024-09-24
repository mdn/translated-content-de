---
title: "MediaTrackSettings: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/MediaTrackSettings/sampleRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleRate`**-Attribut des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine Ganzzahl, die angibt, wie viele Audiosamples pro Sekunde die {{domxref("MediaStreamTrack")}} derzeit konfiguriert ist. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie im {{domxref("MediaTrackConstraints.sampleRate")}}-Attribut beschrieben, das Sie beim Aufruf von entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellt haben.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.sampleRate")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Typischerweise ist dies jedoch unnötig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele Samples jede Sekunde der Audiodaten enthält. Gängige Werte sind 44.100 (Standard-CD-Audio), 48.000 (Standard-Digitalaudio), 96.000 (häufig in der Audiobearbeitung und Nachproduktion verwendet) und 192.000 (verwendet für hochauflösendes Audio in professionellen Aufnahme- und Mastering-Sitzungen). Niedrigere Werte werden jedoch oft verwendet, um Bandbreitenanforderungen zu reduzieren; 8.000 Samples pro Sekunde sind ausreichend für verständliche, wenn auch unvollkommene menschliche Sprache, und sowohl 11.025 FPS als auch 22.050 FPS werden häufig für niedrige Bandbreiten und reduzierte Qualitätsklänge und -musik verwendet.

## Beispiele

Siehe das [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.sampleRate")}}
- {{domxref("MediaTrackSettings")}}
