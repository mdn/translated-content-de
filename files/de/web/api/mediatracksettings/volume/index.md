---
title: "MediaTrackSettings: volume Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackSettings/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke des {{domxref("MediaStreamTrack")}}, wie derzeit konfiguriert, als Wert von 0.0 (Stille) bis 1.0 (maximal unterstützte Lautstärke für das Gerät) angibt. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um mit Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft übereinzustimmen, wie in der von Ihnen bereitgestellten {{domxref("MediaTrackConstraints.volume")}}-Eigenschaft beschrieben, als Sie entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} aufgerufen haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.volume")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke des Audiotracks von 0.0 bis 1.0 angibt, wie sie derzeit konfiguriert ist.

## Beispiele

Siehe das [Beispiel für Constraint-Übungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.volume")}}
- {{domxref("MediaTrackSettings")}}
