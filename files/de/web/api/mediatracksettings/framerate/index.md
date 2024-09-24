---
title: "MediaTrackSettings: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackSettings/frameRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`frameRate`**-Eigenschaft des {{domxref("MediaTrackSettings")}} Wörterbuchs ist eine Double-Precision-Gleitkommazahl, die die Bildrate in Bildern pro Sekunde des aktuell konfigurierten {{domxref("MediaStreamTrack")}} angibt. Dies ermöglicht Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft gerecht zu werden, wie in der {{domxref("MediaTrackConstraints.frameRate")}}-Eigenschaft beschrieben, die Sie bei einem Aufruf von entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.frameRate")}} prüfen, der bei einem Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Eine Double-Precision-Gleitkommazahl, die die aktuelle Konfiguration der Bildrate der Spur in Bildern pro Sekunde angibt.

## Beispiele

Siehe das [Constraint-Beispielprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.frameRate")}}
- {{domxref("MediaTrackSettings")}}
