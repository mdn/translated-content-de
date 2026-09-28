---
title: "MediaTrackSettings: sampleSize-Eigenschaft"
short-title: sampleSize
slug: Web/API/MediaTrackSettings/sampleSize
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die **`sampleSize`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionarys ist eine Ganzzahl, die angibt, auf welche lineare Sample-Größe (in Bit pro Sample) der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Damit können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen festgelegten Einschränkungen für diese Eigenschaft zu erfüllen. Diese Einschränkungen haben Sie in der Eigenschaft [`MediaTrackConstraints.sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize) angegeben, als Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`sampleSize`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#samplesize) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Eine Ganzzahl, die angibt, durch wie viele Bit jedes Audio-Sample dargestellt wird. Seit vielen Jahren beträgt die am häufigsten verwendete Sample-Größe 16 Bit pro Sample; sie wurde unter anderem für CD-Audio verwendet. Weitere übliche Sample-Größen sind 8 Bit (für einen geringeren Bandbreitenbedarf) und 24 Bit (für hochauflösendes professionelles Audio).

Jeder Audiokanal des Tracks benötigt `sampleSize` Bit pro Sample. Das bedeutet, dass ein Sample insgesamt (`sampleSize` / 8) \* [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount) Byte an Daten benötigt. Beispielsweise benötigt 16-Bit-Stereo-Audio (16/8)\*2, also 4 Byte pro Sample.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
