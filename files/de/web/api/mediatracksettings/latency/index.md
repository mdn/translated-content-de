---
title: "MediaTrackSettings: Latenzeigenschaft"
short-title: Latenz
slug: Web/API/MediaTrackSettings/latency
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`latency`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenz (in Sekunden angegeben) des momentan konfigurierten {{domxref("MediaStreamTrack")}} angibt. Dies ermöglicht es Ihnen, zu bestimmen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im {{domxref("MediaTrackConstraints.latency")}}-Attribut beschrieben, das Sie beim Aufrufen von entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellt haben.

Dies ist natürlich eine Annäherung, da die Latenz aus vielen Gründen variieren kann, einschließlich CPU-, Übertragungs- und Speicheraufwand.

Bei Bedarf können Sie feststellen, ob diese Beschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.latency")}} prüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da {{Glossary("RTP")}} diese Informationen nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verknüpft sind, diese Eigenschaft niemals enthalten.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenz in Sekunden der momentan konfigurierten Audiospur angibt.

## Beispiele

Siehe das Beispiel [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.latency")}}
- {{domxref("MediaTrackSettings")}}
