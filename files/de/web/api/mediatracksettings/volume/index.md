---
title: "MediaTrackSettings: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackSettings/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs
ist eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke des
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, wie es momentan konfiguriert ist, als ein Wert von 0,0 (Stille)
bis 1,0 (maximal unterstützte Lautstärke für das Gerät). Dies ermöglicht Ihnen, zu bestimmen, welcher Wert
ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie
in der von Ihnen bereitgestellten [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume)-Eigenschaft
beschrieben, als Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder
[`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von
[`MediaTrackSupportedConstraints.volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) prüfen, wie er durch einen Aufruf von
[`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies
jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke anzeigt, von 0,0 bis 1,0, des
Audiotracks, wie er momentan konfiguriert ist.

## Beispiele

Siehe das Beispiel im [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
