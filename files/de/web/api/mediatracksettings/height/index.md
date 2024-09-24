---
title: "MediaTrackSettings: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackSettings/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`height`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine ganze Zahl, die angibt, wie viele Pixel hoch der {{domxref("MediaStreamTrack")}} derzeit konfiguriert ist. Dadurch können Sie feststellen, welcher Wert ausgewählt wurde, um Ihren spezifizierten Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der von Ihnen bei dem Aufruf von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellten {{domxref("MediaTrackConstraints.height")}}-Eigenschaft beschrieben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.height")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein Ganzzahlwert, der die Höhe des Videotracks in Pixeln angibt, wie er derzeit konfiguriert ist.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.height")}}
- {{domxref("MediaTrackSettings")}}
