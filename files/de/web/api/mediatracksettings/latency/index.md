---
title: "MediaTrackSettings: Latenz-Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackSettings/latency
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`latency`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Dictionarys ist eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenz (in Sekunden angegeben) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) in seiner aktuellen Konfiguration angibt. Dies ermöglicht es Ihnen, zu ermitteln, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie in der [`MediaTrackConstraints.latency`](/de/docs/Web/API/MediaTrackConstraints/latency) Eigenschaft beschrieben, die Sie beim Aufruf entweder von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Dies ist natürlich eine Annäherung, da die Latenz aus vielen Gründen variieren kann, einschließlich CPU-, Übertragungs- und Speicherüberkopf.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.latency`](/de/docs/Web/API/MediaTrackSupportedConstraints/latency) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch normalerweise nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft nie enthalten.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenz, in Sekunden, des aktuell konfigurierten Audiotracks angibt.

## Beispiele

Siehe das [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
