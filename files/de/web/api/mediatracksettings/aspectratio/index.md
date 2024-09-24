---
title: "MediaTrackSettings: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/MediaTrackSettings/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`aspectRatio`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine doppeltgenaue Gleitkommazahl, die das {{glossary("Seitenverhältnis")}} des {{domxref("MediaStreamTrack")}} darstellt, wie es momentan konfiguriert ist. Dies ermöglicht es Ihnen, den Wert zu ermitteln, der ausgewählt wurde, um Ihren angegebenen Einschränkungen für diesen Eigenschaftswert zu entsprechen, wie in der {{domxref("MediaTrackConstraints.aspectRatio")}}-Eigenschaft beschrieben, die Sie beim Aufrufen von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} angegeben haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.aspectRatio")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Eine doppeltgenaue Gleitkommazahl, die die aktuelle Konfiguration des Seitenverhältnisses des Tracks angibt. Das Seitenverhältnis wird berechnet, indem die Breite des Tracks durch seine Höhe geteilt wird und das Ergebnis auf zehn Dezimalstellen gerundet wird. Zum Beispiel kann das standardmäßige 16:9 High-Definition-Seitenverhältnis als 1920/1080 oder 1,7777777778 berechnet werden.

## Beispiele

Siehe das [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.aspectRatio")}}
- {{domxref("MediaTrackSettings")}}
