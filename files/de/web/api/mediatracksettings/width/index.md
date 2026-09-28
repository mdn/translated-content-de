---
title: "MediaTrackSettings: width-Eigenschaft"
short-title: width
slug: Web/API/MediaTrackSettings/width
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`width`** des Dictionaries [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist eine Ganzzahl, die angibt, auf wie viele Pixel Breite [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. So können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Constraints für diese Eigenschaft zu erfüllen. Diese Constraints haben Sie über die Eigenschaft [`MediaTrackConstraints.width`](/de/docs/Web/API/MediaTrackConstraints/width) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird. Überprüfen Sie dazu den Wert von [`width`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#width), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht erforderlich, da Browser unbekannte Constraints ignorieren.

## Wert

Eine Ganzzahl, die die Breite des Videotracks in Pixeln gemäß seiner aktuellen Konfiguration angibt.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.width`](/de/docs/Web/API/MediaTrackConstraints/width)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
