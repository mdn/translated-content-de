---
title: "MediaTrackSettings: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/MediaTrackSettings/aspectRatio
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`aspectRatio`** des Dictionaries [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist eine Gleitkommazahl mit doppelter Genauigkeit, die das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) in seiner aktuellen Konfiguration angibt.
Damit können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen angegebenen Einschränkungen für diese Eigenschaft zu erfüllen. Diese Einschränkungen haben Sie über die Eigenschaft [`MediaTrackConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) übergeben.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`aspectRatio`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#aspectratio) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die das aktuell konfigurierte Seitenverhältnis des Tracks angibt. Das Seitenverhältnis wird berechnet, indem die Breite des Tracks durch seine Höhe geteilt und das Ergebnis auf zehn Nachkommastellen gerundet wird. Das standardmäßige 16:9-Seitenverhältnis für hochauflösende Videos lässt sich beispielsweise als 1920/1080 beziehungsweise 1,7777777778 berechnen.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
