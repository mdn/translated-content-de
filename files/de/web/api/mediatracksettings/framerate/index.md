---
title: "MediaTrackSettings: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackSettings/frameRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`frameRate`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Gleitkommazahl mit doppelter Genauigkeit, die die Bildrate des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) in Bildern pro Sekunde angibt, wie sie derzeit konfiguriert ist. Dies ermöglicht Ihnen festzustellen, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für diesen Eigenschaftswert zu erfüllen, wie in der Eigenschaft [`MediaTrackConstraints.frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate) beschrieben, die Sie beim Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Falls nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.frameRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/frameRate) überprüfen, der von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle nicht bekannten Einschränkungen ignorieren.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die aktuelle Konfiguration der Bildrate des Tracks in Bildern pro Sekunde angibt.

## Beispiele

Siehe das [Beispiel für Constraint-Übungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
