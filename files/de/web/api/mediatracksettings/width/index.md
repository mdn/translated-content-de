---
title: "MediaTrackSettings: Eigenschaft width"
short-title: width
slug: Web/API/MediaTrackSettings/width
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`width`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine ganze Zahl, die angibt, wie viele Pixel breit der {{domxref("MediaStreamTrack")}} momentan konfiguriert ist. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie sie in der von Ihnen bereitgestellten {{domxref("MediaTrackConstraints.width")}}-Eigenschaft beschrieben sind, wenn Sie entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} aufrufen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.width")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen nicht bekannten Einschränkungen ignorieren.

## Wert

Ein ganzzahliger Wert, der die Breite der Videospur in Pixeln in der aktuellen Konfiguration angibt.

## Beispiele

Siehe das [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.width")}}
- {{domxref("MediaTrackSettings")}}
