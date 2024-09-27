---
title: "MediaTrackSettings: latency Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackSettings/latency
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`latency`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenzzeit (angegeben in Sekunden) des aktuell konfigurierten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt. Dies ermöglicht Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im Attribut [`MediaTrackConstraints.latency`](/de/docs/Web/API/MediaTrackConstraints/latency) beschrieben, das Sie beim Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Dies ist natürlich eine Näherung, da die Latenzzeit aus vielen Gründen variieren kann, einschließlich CPU-, Übertragungs- und Speicher-Overhead.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.latency`](/de/docs/Web/API/MediaTrackSupportedConstraints/latency) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert sind, diese Eigenschaft niemals enthalten.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenzzeit, in Sekunden, des aktuell konfigurierten Audiotracks angibt.

## Beispiele

Siehe das [Beispiel der Einschränkungsübung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
