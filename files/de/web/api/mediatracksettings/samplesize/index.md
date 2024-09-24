---
title: "MediaTrackSettings: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackSettings/sampleSize
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{APIRef("Media Capture and Streams")}}

Das **`sampleSize`**-Eigenschaftswörterbuch von {{domxref("MediaTrackSettings")}} ist eine Ganzzahl, die die lineare Sample-Größe (in Bits pro Sample) angibt, für die der {{domxref("MediaStreamTrack")}} derzeit konfiguriert ist. Dies ermöglicht Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihren spezifizierten Einschränkungen für diesen Eigenschaftswert zu entsprechen, wie in der von Ihnen bereitgestellten {{domxref("MediaTrackConstraints.sampleSize")}}-Eigenschaft beschrieben, als Sie entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} aufgerufen haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.sampleSize")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser jegliche Ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein Ganzzahlwert, der angibt, wie viele Bits jedes Audiosample darstellt. Die am häufigsten verwendete Sample-Größe seit vielen Jahren beträgt 16 Bits pro Sample, was unter anderem für CD-Audio verwendet wurde. Andere häufige Sample-Größen sind 8 (für geringeren Bandbreitenbedarf) und 24 (für hochauflösendes professionelles Audio).

Jeder Audiokanal auf der Spur benötigt `sampleSize`-Bits. Das bedeutet, dass ein bestimmtes Sample tatsächlich (`sampleSize` / 8) \* {{domxref("MediaTrackSettings.channelCount","channelCount")}} Bytes an Daten verwendet. Zum Beispiel erfordert 16-Bit-Stereo-Audio (16/8)\*2 oder 4 Bytes pro Sample.

## Beispiele

Siehe das [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.sampleSize")}}
- {{domxref("MediaTrackSettings")}}
