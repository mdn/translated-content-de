---
title: "MediaTrackSettings: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackSettings/sampleSize
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{APIRef("Media Capture and Streams")}}

Die **`sampleSize`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Ganzzahl, die die lineare Abtastgröße (in Bits pro Abtastwert) angibt, für die der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der von Ihnen bereitgestellten [`MediaTrackConstraints.sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)-Eigenschaft beschrieben, wenn Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleSize`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleSize) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle nicht bekannten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der angibt, durch wie viele Bits jede Audio-Abtastung dargestellt wird. Die am häufigsten verwendete Abtastgröße seit vielen Jahren beträgt 16 Bits pro Abtastung, die unter anderem für CD-Audio verwendet wurde. Andere übliche Abtastgrößen sind 8 (für reduzierte Bandbreitenanforderungen) und 24 (für hochauflösendes professionelles Audio).

Jeder Audiokanal auf der Spur benötigt sampleSize Bits.
Das bedeutet, dass eine bestimmte Abtastung tatsächlich (`sampleSize` / 8) \* [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount) Bytes Daten verwendet.
Zum Beispiel erfordert 16-Bit-Stereo-Audio (16/8)\*2 oder 4 Bytes pro Abtastung.

## Beispiele

Siehe das [Constraint-Testgerät](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
