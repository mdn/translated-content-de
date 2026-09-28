---
title: "MediaTrackSettings: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackSettings/height
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`height`** des Dictionaries [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist eine Ganzzahl, die angibt, auf wie viele Pixel Höhe [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit konfiguriert ist. Damit können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen festgelegten Constraints für diese Eigenschaft zu erfüllen. Diese haben Sie über die Eigenschaft [`MediaTrackConstraints.height`](/de/docs/Web/API/MediaTrackConstraints/height) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird. Sehen Sie dazu nach, welchen Wert [`height`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#height) bei einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser ihnen unbekannte Constraints ignorieren.

## Wert

Eine Ganzzahl, die die aktuell konfigurierte Höhe des Videotracks in Pixeln angibt.

## Beispiele

Sehen Sie sich das Beispiel [Constraint-Tester](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.height`](/de/docs/Web/API/MediaTrackConstraints/height)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
