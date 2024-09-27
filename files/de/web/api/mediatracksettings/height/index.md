---
title: "MediaTrackSettings: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackSettings/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`height`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Ganzzahl, die angibt, wie viele Pixel hoch der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie sie in der [`MediaTrackConstraints.height`](/de/docs/Web/API/MediaTrackConstraints/height)-Eigenschaft beschrieben sind, die Sie bei Aufrufen von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.height`](/de/docs/Web/API/MediaTrackSupportedConstraints/height) prüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der die Höhe der Videospur in Pixel angibt, wie sie derzeit konfiguriert ist.

## Beispiele

Siehe das Beispiel [Constraint-Übung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.height`](/de/docs/Web/API/MediaTrackConstraints/height)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
