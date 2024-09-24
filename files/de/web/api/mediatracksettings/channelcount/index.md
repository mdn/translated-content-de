---
title: "MediaTrackSettings: channelCount-Eigenschaft"
short-title: channelCount
slug: Web/API/MediaTrackSettings/channelCount
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`channelCount`**-Attribut des {{domxref("MediaTrackSettings")}} Wörterbuchs ist eine Ganzzahl, die angibt, wie viele Audiokanäle der {{domxref("MediaStreamTrack")}} derzeit konfiguriert hat. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie sie in der {{domxref("MediaTrackConstraints.channelCount")}} Eigenschaft beschrieben sind, die Sie beim Aufrufen von entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.channelCount")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Ganzzahlwert, der die Anzahl der Audiokanäle auf der Spur angibt. Ein Wert von 1 gibt Mono-Sound an, 2 bedeutet Stereo und so weiter.

## Beispiele

Sehen Sie sich das Beispiel des [Constraint-Übersetzers](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.channelCount")}}
- {{domxref("MediaTrackSettings")}}
