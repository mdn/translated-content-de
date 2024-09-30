---
title: "MediaTrackSettings: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackSettings/width
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`width`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Wörterbuchs ist ein Integer, der angibt, wie viele Pixel breit der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der von Ihnen angegebenen [`MediaTrackConstraints.width`](/de/docs/Web/API/MediaTrackConstraints/width) Eigenschaft beschrieben, als Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.width`](/de/docs/Web/API/MediaTrackSupportedConstraints/width) überprüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Integer-Wert, der die Breite des Videotracks in Pixeln angibt, wie er derzeit konfiguriert ist.

## Beispiele

Siehe das [Einschränkungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.width`](/de/docs/Web/API/MediaTrackConstraints/width)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
