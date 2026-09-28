---
title: "MediaTrackSettings: latency-Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackSettings/latency
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die **`latency`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionaries ist eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenz (in Sekunden) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) in seiner aktuellen Konfiguration angibt. Damit können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen für diese Eigenschaft festgelegten Constraints zu erfüllen. Diese Constraints werden durch die Eigenschaft [`MediaTrackConstraints.latency`](/de/docs/Web/API/MediaTrackConstraints/latency) beschrieben, die Sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Dieser Wert ist eine Schätzung, da die Latenz aus vielen Gründen schwanken kann, unter anderem durch zusätzlichen Aufwand bei der CPU-Verarbeitung, der Übertragung und der Speicherung.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`latency`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#latency) untersuchen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft niemals auf.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die geschätzte Latenz des Audiotracks in seiner aktuellen Konfiguration in Sekunden angibt.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
