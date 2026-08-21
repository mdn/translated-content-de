---
title: "MediaTrackSettings: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackSettings/volume
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Media Capture and Streams")}}{{Non-standard_Header}}

Das **`volume`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, wie sie aktuell konfiguriert ist, als Wert von 0.0 (Stille) bis 1.0 (maximal unterstützte Lautstärke für das Gerät). Dies erlaubt es Ihnen zu bestimmen, welcher Wert gewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft einzuhalten, wie sie in der von Ihnen bereitgestellten [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume) Eigenschaft beschrieben sind, als Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle unbekannten Einschränkungen ignorieren werden.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke des Audiotracks von 0.0 bis 1.0 angibt, wie sie aktuell konfiguriert ist.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
