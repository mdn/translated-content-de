---
title: "MediaTrackSettings: channelCount-Eigenschaft"
short-title: channelCount
slug: Web/API/MediaTrackSettings/channelCount
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`channelCount`**-Attribut im [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuch ist eine ganze Zahl, die angibt, wie viele Audiokanäle die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit aufweist. Dies ermöglicht Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im [`MediaTrackConstraints.channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)-Attribut beschrieben, das Sie bei einem Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.channelCount`](/de/docs/Web/API/MediaTrackSupportedConstraints/channelCount) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser jegliche nicht vertrauten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Audiokanäle auf der Spur angibt. Ein Wert von 1 bedeutet monoauralen Klang, 2 bedeutet Stereo und so weiter.

## Beispiele

Siehe das Beispiel des [Constraint-Übungsprogramms](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
