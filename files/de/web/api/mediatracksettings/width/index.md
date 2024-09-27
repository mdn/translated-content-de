---
title: "MediaTrackSettings: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackSettings/width
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`width`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine ganze Zahl, die angibt, wie viele Pixel breit der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dies ermöglicht es Ihnen, festzustellen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft einzuhalten, wie in der [`MediaTrackConstraints.width`](/de/docs/Web/API/MediaTrackConstraints/width)-Eigenschaft beschrieben, die Sie beim Aufrufen entweder von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.width`](/de/docs/Web/API/MediaTrackSupportedConstraints/width) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser jede Einschränkung ignorieren, mit der sie nicht vertraut sind.

## Wert

Ein ganzzahliger Wert, der die Breite in Pixeln des aktuell konfigurierten Videostreams angibt.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.width`](/de/docs/Web/API/MediaTrackConstraints/width)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
