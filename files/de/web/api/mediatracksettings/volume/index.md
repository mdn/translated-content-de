---
title: "MediaTrackSettings: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackSettings/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Gleitkommazahl in Doppelpräzision, die die Lautstärke der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, wie sie derzeit konfiguriert ist, als Wert von 0.0 (Stille) bis 1.0 (maximal unterstützte Lautstärke für das Gerät). Dies ermöglicht es Ihnen, zu ermitteln, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie im [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume) angegeben, den Sie bereitgestellt haben, als Sie entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch typischerweise nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Eine Gleitkommazahl in Doppelpräzision, die die Lautstärke des aktuell konfigurierten Audiotracks angibt, von 0.0 bis 1.0.

## Beispiele

Siehe das Beispiel im [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
