---
title: "MediaTrackSettings: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/MediaTrackSettings/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`aspectRatio`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Gleitkommazahl mit doppelter Genauigkeit, die das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, wie es derzeit konfiguriert ist. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)-Eigenschaft beschrieben, die Sie entweder beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die aktuelle Konfiguration des Seitenverhältnisses der Spur angibt. Das Seitenverhältnis wird berechnet, indem die Breite der Spur durch ihre Höhe geteilt und das Ergebnis auf zehn Dezimalstellen gerundet wird. Beispielsweise kann das standardmäßige 16:9-High-Definition-Seitenverhältnis als 1920/1080 oder 1.7777777778 berechnet werden.

## Beispiele

Siehe das Beispiel im [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
