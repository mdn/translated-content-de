---
title: "MediaTrackSettings: channelCount-Eigenschaft"
short-title: channelCount
slug: Web/API/MediaTrackSettings/channelCount
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`channelCount`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Ganzzahl, die angibt, wie viele Audiokanäle der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert hat. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)-Eigenschaft beschrieben, die Sie beim Aufrufen von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.channelCount`](/de/docs/Web/API/MediaTrackSupportedConstraints/channelCount) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Ganzzahlwert, der die Anzahl der Audiokanäle auf dem Track angibt. Ein Wert von 1 bedeutet Mono-Ton, 2 steht für Stereo und so weiter.

## Beispiele

Siehe das Beispiel des [Constraint-Übungswerkzeugs](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
