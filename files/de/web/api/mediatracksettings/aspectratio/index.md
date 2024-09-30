---
title: "MediaTrackSettings: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/MediaTrackSettings/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`aspectRatio`**-Eigenschaftswörterbuch von [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist eine Gleitkommazahl mit doppelter Genauigkeit, die das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, wie es derzeit konfiguriert ist. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie sie in der Eigenschaft [`MediaTrackConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio) beschrieben sind, die Sie beim Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio) abfragen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die aktuelle Konfiguration des Seitenverhältnisses des Tracks angibt. Das Seitenverhältnis wird berechnet, indem die Breite des Tracks durch seine Höhe geteilt und das Ergebnis auf zehn Dezimalstellen gerundet wird. Zum Beispiel kann das standardmäßige 16:9-High-Definition-Seitenverhältnis als 1920/1080 oder 1.7777777778 berechnet werden.

## Beispiele

Siehe das [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
