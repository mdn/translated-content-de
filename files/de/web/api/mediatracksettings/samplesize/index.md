---
title: "MediaTrackSettings: Eigenschaft sampleSize"
short-title: sampleSize
slug: Web/API/MediaTrackSettings/sampleSize
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{APIRef("Media Capture and Streams")}}

Die **`sampleSize`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein Integer, der die lineare Stichprobengröße (in Bits pro Stichprobe) angibt, für die der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im [`MediaTrackConstraints.sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)-Eigenschaft beschrieben, die Sie bei einem Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.sampleSize`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleSize) überprüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele Bits jede Audiosample darstellt. Die am häufigsten verwendete Stichprobengröße seit vielen Jahren ist 16 Bits pro Stichprobe, die unter anderem für CD-Audio verwendet wurde. Andere übliche Stichprobengrößen sind 8 (für reduzierte Bandbreitenanforderungen) und 24 (für hochauflösendes professionelles Audio).

Jeder Audiokanal im Track benötigt `sampleSize` Bits. Das bedeutet, dass eine gegebene Stichprobe tatsächlich (`sampleSize` / 8) \* [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount) Bytes Daten verwendet. Beispielsweise erfordert 16-Bit-Stereo-Audio (16/8)\*2 oder 4 Bytes pro Stichprobe.

## Beispiele

Siehe das [Beispiel zu Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
