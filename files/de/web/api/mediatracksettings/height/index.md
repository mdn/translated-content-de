---
title: "MediaTrackSettings: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackSettings/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`height`**-Eigentum des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine ganze Zahl, die angibt, wie viele Pixel hoch der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dies ermöglicht Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im [`MediaTrackConstraints.height`](/de/docs/Web/API/MediaTrackConstraints/height)-Eigenschaft beschrieben, die Sie bei einem Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.height`](/de/docs/Web/API/MediaTrackSupportedConstraints/height) überprüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser jede Einschränkung ignorieren, die ihnen unbekannt ist.

## Wert

Ein ganzzahliger Wert, der die Höhe in Pixeln des Video-Streams angibt, wie er derzeit konfiguriert ist.

## Beispiele

Siehe das [Beispiel für einen Einschränkungs-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.height`](/de/docs/Web/API/MediaTrackConstraints/height)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
